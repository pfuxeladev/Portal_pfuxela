<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Viatura;
use App\Models\viatura_historico;
use App\Models\ViaturaRota;
use Carbon\Carbon;

class ViaturaAlocadaController extends Controller
{
    private $viatura_rota;

    function __construct(ViaturaRota $viatura_rota)
    {
        $this->viatura_rota = $viatura_rota;
    }
    public function index(Request $request)
    {
        $viaturas = array();
            $viaturas = viatura_historico::with(['viatura.rota'])->join('viaturas', 'viaturas.id','=', 'viatura_historicos.viatura_id')
            ->select('viatura_historicos.viatura_id as viatura_id', 'viaturas.id as id', 'viaturas.matricula', 'viaturas.capacidade_media', 'viaturas.qtd_disponivel', 'viaturas.tipo_combustivel', 'viaturas.capacidade_tanque', 'viaturas.kilometragem', 'viaturas.kilometragem_ant','viatura_historicos.manometro_km', 'viatura_historicos.manometro_combustivel', 'viatura_historicos.km_percorridos', 'viatura_historicos.qtd_prevista')
            ->orderBy('viaturas.created_at', 'desc')->paginate(15);;


        return response($viaturas, 200);
    }

    public function historicoDeLeitura()
    {

    }

    public function rotas($viatura_id){
        $rotaList = array();
        $rotas = $this->viatura_rota->join('rotas', 'viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')->where('viatura_rotas.viatura_id', $viatura_id)->whereDate('viatura_rotas.created_at', Carbon::today())->select('rotas.id','rotas.nome_rota', 'projectos.name as projecto', 'rotas.distancia_km')->orderBy('rotas.id', 'desc')->get();

        foreach ($rotas as $key => $rt) {
           $rotaList[$key] = [
            'id'=>$rt->id,
            'rota_projecto'=> $rt->nome_rota.' - '.$rt->projecto,
            'distancia'=>$rt->distancia_km
           ];
        }
        return response($rotaList, 200);
    }

    public function getViatura($viatura_id)
    {
        return Viatura::join('checklist_out', 'viaturas.id', 'checklist_out.viatura_id')->where('checklist_out.viatura_id', $viatura_id)->first();
    }

    public function store(Request $request)
    {

        foreach ($request->rota['rota_id'] as $key => $rota_id) {
            $viatura_rota = ViaturaRota::where('rota_id', $rota_id)->where('viatura_id', $request->viatura_id)->whereDate('created_at', Carbon::today())->first();

            if (!empty($viatura_rota)) {

                if(Viatura::where('id', $viatura_rota->viatura_id)->first() != null){
                    return response(['error' => 'Nao pode alocar duas vezes a viatura no mesmo dia'], 421);
                }else{
                    return response(['error' => 'Nao pode alocar duas viaturas na mesma rota'], 421);
                }


            }
        }



        $viaturaLeitura = new viatura_historico();

        $viaturaLeitura->viatura_id = $request->viatura_id;
        $viaturaLeitura->manometro_km = $request->manometro_km;
        $viaturaLeitura->manometro_combustivel = $request->manometro_combustivel;
        $viaturaLeitura->motorista_id = $request->motorista_id;
        $viaturaLeitura->km_percorridos = $request->kmPercorridos;
        $viaturaLeitura->qtd_prevista = $request->qtdActual;
        $viaturaLeitura->qtd_abastecida = 0;
        $viaturaLeitura->estado = true;
        $viaturaLeitura->created_by_user_id = auth()->user()->id;
        $viaturaLeitura->save();

        $viatura = Viatura::where('id', $request->viatura_id)->first();

        $km_ant = $viatura->kilometragem + $request->kmPercorridos;
        $viatura->kilometragem_ant = $viatura->kilometragem;
        $viatura->kilometragem = $request->manometro_km;
        $viatura->qtd_disponivel = $request->manometro_combustivel;
        $viatura->update();


        if ($viaturaLeitura) {
            foreach ($request->rota['rota_id'] as $key => $rotas) {
                ViaturaRota::updateOrCreate([
                    'viatura_id' => $request->viatura_id, 'rota_id' => $rotas, 'createdBy' => auth()->user()->id, 'updatedBy' => auth()->user()->id, 'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ]);
            }

            return response()->json(['message' => 'viatura escalada com sucesso']);
        }
    }

    function viaturaAlocada($viatura_id){
        $viatura = ViaturaRota::join('viaturas', 'viatura_alocadas.viatura_id', '=', 'viaturas.id')->get();
    }
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
