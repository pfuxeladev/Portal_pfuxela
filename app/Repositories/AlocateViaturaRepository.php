<?php

namespace App\Repositories;

use App\Models\viatura_historico;
use App\Interfaces\ViaturaAlocadaInterface;
use App\Models\Viatura;
use App\Models\ViaturaRota;
use Carbon\Carbon;

class AlocateViaturaRepository implements ViaturaAlocadaInterface {


    protected $viaturaHistorico = null;

    function __construct(viatura_historico $viaturaHistorico){
        $this->viaturaHistorico = $viaturaHistorico;
    }


    public function getAllAlocated($request){
        $viaturas = array();
            $viaturas = $this->viaturaHistorico->with(['viatura.rota'])->join('viaturas', 'viaturas.id','=', 'viatura_historicos.viatura_id')
            ->select('viatura_historicos.viatura_id as viatura_id', 'viatura_historicos.id as id', 'viaturas.matricula', 'viaturas.capacidade_media', 'viaturas.qtd_disponivel', 'viaturas.tipo_combustivel', 'viaturas.capacidade_tanque', 'viaturas.kilometragem', 'viaturas.kilometragem_ant','viatura_historicos.manometro_km', 'viatura_historicos.manometro_combustivel', 'viatura_historicos.km_percorridos', 'viatura_historicos.qtd_prevista')
            ->orderBy('viatura_historicos.created_at', 'desc')->paginate(15);

            return $viaturas;
    }


    function EditViaturaHistory($id, array $newDetails){
       $viatura =  $this->viaturaHistorico->whereId($id)->first();

       $datetime = \Carbon\Carbon::now()->subHours(5)->format("Y-m-d H:i:s");
       $rotas = array();

       foreach ($newDetails['rota']->rota_id as $key => $rota_id) {
           $rotas[$key] = $rota_id;
       }
       $viatura_rota = ViaturaRota::where('viatura_id', $newDetails['viatura_id'])->whereIn('rota_id', $rotas)->where('created_at', '>=', $datetime)->first();

       if (!empty($viatura_rota)) {

           if(Viatura::where('id', $viatura_rota->viatura_id)->first() != null){
               return response(['error' => 'Nao pode alocar duas vezes a viatura no mesmo dia'], 421);
           }else{
               return response(['error' => 'Nao pode alocar duas viaturas na mesma rota'], 421);
           }


       }
       $viatura->viatura_id = $newDetails['viatura_id'];
       $viatura->manometro_km = $newDetails['manometro_km'];
       $viatura->manometro_combustivel = $newDetails['manometro_combustivel'];
       $viatura->motorista_id = $newDetails['motorista_id'];
       $viatura->km_percorridos = $newDetails['km_percorridos'];
       $viatura->qtd_prevista = $newDetails['qtd_prevista'];
       $viatura->qtd_abastecida = 0;
       $viatura->estado = true;
       $viatura->created_by_user_id = auth()->user()->id;
       $viatura->update();

       $remanescente = 0;

       $viaturaUpdate = Viatura::where('id', $newDetails['viatura_id'])->first();
        $remanescente = ($viaturaUpdate->qtd_disponivel - $newDetails['qtdActual']);
        $km_ant = $viatura->kilometragem + $newDetails['km_percorridos'];
        $viaturaUpdate->kilometragem_ant = $viaturaUpdate->kilometragem;
        $viaturaUpdate->kilometragem = $newDetails['manometro_km'];
        $viaturaUpdate->qtd_disponivel = $newDetails['manometro_combustivel'];
        $viaturaUpdate->update();

        if ($viatura) {
            foreach ($newDetails['rota']->rota_id as $key => $rotas) {
                ViaturaRota::where('viatura_id', $viatura->id)->update([
                    'viatura_id' => $newDetails['viatura_id'], 'rota_id' => $rotas, 'createdBy' => auth()->user()->id, 'updatedBy' => auth()->user()->id, 'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ]);
            }

            return response()->json(['message' => 'viatura escalada com sucesso']);
        }
    }

function ViewViaturaAlocada($viaturaId){
    $viaturas = viatura_historico::with(['viatura.rota'])->find($viaturaId);

    return $viaturas;
}
}
