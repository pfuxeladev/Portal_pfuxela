<?php

namespace App\Repositories;

use App\Models\viatura_historico;
use App\Interfaces\ViaturaAlocadaInterface;
use App\Models\Viatura;
use App\Models\ViaturaRota;
use Carbon\Carbon;

class AlocateViaturaRepository implements ViaturaAlocadaInterface
{


    protected $viaturaHistorico = null;
    protected $viaturaAlocada = null;

    function __construct(viatura $viaturaAlocada, viatura_historico $viaturaHistorico)
    {
        $this->viaturaHistorico = $viaturaHistorico;
        $this->viaturaAlocada = $viaturaAlocada;
    }


    public function getAllAlocated($request)
    {
        $viaturas = array();
        $viaturas = $this->viaturaHistorico->with(['viatura.rota'])->join('viaturas', 'viaturas.id', '=', 'viatura_historicos.viatura_id')
            ->select('viatura_historicos.viatura_id as viatura_id', 'viatura_historicos.id as id', 'viaturas.matricula', 'viaturas.capacidade_media', 'viaturas.qtd_disponivel', 'viaturas.tipo_combustivel', 'viaturas.capacidade_tanque', 'viaturas.kilometragem', 'viaturas.kilometragem_ant', 'viatura_historicos.manometro_km', 'viatura_historicos.manometro_combustivel', 'viatura_historicos.km_percorridos', 'viatura_historicos.qtd_prevista', 'viatura_historicos.created_at')
            ->orderBy('viatura_historicos.created_at', 'desc')->newQuery();

            if($request->q){
                $viaturas->where('viaturas.matricula', 'Like', '%'.$request->q.'%')
                ->orWhere('viatura_historicos.manometro_km', 'Like', '%'.$request->q.'%')
                ->orWhere('viaturas.kilometragem', 'Like', '%'.$request->q.'%')
                ->orWhere('viaturas.tipo_combustivel', 'Like', '%'.$request->q.'%')
                ->orWhere('viaturas.capacidade_tanque', 'Like', '%'.$request->q.'%');
            }
            $viaturas = $viaturas->orderBy('viatura_historicos.created_at', 'DESC')->paginate(15);

        return $viaturas;
    }


    function EditViaturaHistory(array $newDetails, $id)
    {
      
        $message = [];
        $viatura =  $this->viaturaHistorico->whereDate('created_at', '=', date($id))->first();

        // return $viatura;

        $datetime = \Carbon\Carbon::now()->subHours(5)->format("Y-m-d H:i:s");
        $rotas = array();

        foreach ($newDetails['rota_id'] as $key => $rota_id) {
            $rotas[$key] = $rota_id;
        }
        $viatura_rota = ViaturaRota::where('viatura_id', $newDetails['viatura_id'])->whereIn('rota_id', $rotas)->where('created_at', '>=', $datetime)->first();

        if (!empty($viatura_rota)) {

            if (Viatura::where('id', $viatura_rota->viatura_id)->first() != null) {
                return response(['error' => 'Nao pode alocar duas vezes a viatura no mesmo dia'], 421);
            } else {
                return response(['error' => 'Nao pode alocar duas viaturas na mesma rota'], 421);
            }
        }
        // $viatura->viatura_id = $newDetails['viatura_id'];
        $viatura->manometro_km = $newDetails['manometro_km'];
        $viatura->manometro_combustivel = $newDetails['manometro_combustivel'];
        $viatura->motorista_id = $newDetails['motorista_id'];
        $viatura->km_percorridos = $newDetails['kmPercorridos'];
        $viatura->qtd_prevista = $newDetails['qtd_prevista'];
        $viatura->qtd_abastecida = 0;
        $viatura->estado = true;
        $viatura->created_by_user_id = auth()->user()->id;
        $viatura->update();

        $remanescente = 0;

        $viaturaUpdate = Viatura::where('id', $newDetails['viatura_id'])->first();
        $remanescente = ($viaturaUpdate->qtd_disponivel - $newDetails['manometro_combustivel']);
        $km_ant = $viatura->kilometragem + $newDetails['kmPercorridos'];
        $viaturaUpdate->kilometragem_ant = $viaturaUpdate->kilometragem;
        $viaturaUpdate->kilometragem = $newDetails['manometro_km'];
        $viaturaUpdate->qtd_disponivel = $newDetails['manometro_combustivel'];
        $viaturaUpdate->update();

        $dataRotas = array();
            foreach ($newDetails['rota_id'] as $key => $rota) {
                $key++;
                // $dataRotas = ['rota_id'=>$rota];
                ViaturaRota::whereDate('created_at', '=', Carbon::parse($id)->format('Y-m-d H:i:s'))
                ->where('viatura_id', $newDetails['viatura_id'])->update([
                    'rota_id' => $rota, 'createdBy' => auth()->user()->id, 'updatedBy' => auth()->user()->id,
                    'updated_at' => Carbon::now()
                ]);
            }
           
            return 'Actualizado com sucesso';
        // }
    }

    function ViewViaturaAlocada($viaturaId)
    {

        return $this->viaturaAlocada->with('rota')
            ->join('viatura_historicos', 'viaturas.id', '=', 'viatura_historicos.viatura_id')
            ->select('viatura_historicos.id as id', 'viatura_historicos.viatura_id', 'viatura_historicos.id as historico_id', 'viaturas.matricula', 'viaturas.capacidade_media', 'viaturas.qtd_disponivel', 'viaturas.tipo_combustivel', 'viaturas.capacidade_tanque', 'viaturas.kilometragem_ant as kmActual', 'viaturas.kilometragem_ant', 'viatura_historicos.manometro_km', 'viatura_historicos.manometro_combustivel', 'viatura_historicos.motorista_id', 'viatura_historicos.km_percorridos as kmPercorridos', 'viatura_historicos.qtd_prevista', 'viatura_historicos.created_at')->whereDate('viatura_historicos.created_at', '=', date($viaturaId))->orderBy('viatura_historicos.created_at', 'asc')->first();
    }
}
