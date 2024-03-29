<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Http\Requests\Viatura\AlocarRequest;
use App\Interfaces\ViaturaAlocadaInterface;
use App\Models\CheckListOut;
use Illuminate\Http\Request;
use App\Models\Viatura;
use App\Models\viatura_historico;
use App\Models\ViaturaRota;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;

class ViaturaAlocadaController extends Controller
{
    private $viatura_rota;
    private $viaturaAlocada;

    function __construct(ViaturaRota $viatura_rota, ViaturaAlocadaInterface $viaturaAlocada)
    {
        $this->viatura_rota = $viatura_rota;
        $this->viaturaAlocada = $viaturaAlocada;
    }
    public function index(Request $request): JsonResponse
    {
        return response()->json($this->viaturaAlocada->getAllAlocated($request));
    }

    public function historicoDeLeitura()
    {

    }

    public function rotas($viatura_id){
        $datetime = \Carbon\Carbon::now()->subHours(8)->format("Y-m-d H:i:s");
        $rotaList = array();
        $rotas = $this->viatura_rota->join('rotas', 'viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')->where('viatura_rotas.viatura_id', $viatura_id)->where('viatura_rotas.created_at', '>=', $datetime)->select('rotas.id','rotas.nome_rota', 'projectos.name as projecto', 'rotas.distancia_km')->orderBy('rotas.id', 'desc')->get();
        // where('created_at', '>=', $datetime)

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
        return Viatura::join('checklist_out', 'viaturas.id', 'checklist_out.viatura_id')->where('checklist_out.viatura_id', $viatura_id)->select('viaturas.id', 'viaturas.matricula', 'checklist_out.created_at', 'viaturas.kilometragem', 'checklist_out.km_inicio')->latest()->first();
    }
    public function getQtdViatura($viatura_id){
        return viatura_historico::where('viatura_id', $viatura_id)->latest()
        ->first();
    }
    public function store(AlocarRequest $request)
    {
        $datetime = \Carbon\Carbon::now()->subHours(3)->format("Y-m-d H:i:s");
        $rotas = array();

        foreach ($request->rota_id as $key => $rota_id) {
            $rotas[$key] = $rota_id;
        }
        $viatura_rota = ViaturaRota::where('viatura_id', $request->viatura_id)->whereIn('rota_id', $request->rota_id)->where('created_at', '>=', $datetime)->first();

        if (!empty($viatura_rota)) {

            if(Viatura::where('id', $viatura_rota->viatura_id)->first() != null){
                return response(['error' => 'Nao pode alocar duas vezes a viatura no mesmo dia'], 421);
            }else{
                return response(['error' => 'Nao pode alocar duas viaturas na mesma rota'], 421);
            }

        }

        $last_checklist = CheckListOut::where('viatura_id', $request->viatura_id)->latest()
        ->first();


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

        // $km_ant = $viatura->kilometragem + $request->kmPercorridos;
        // $viatura->kilometragem_ant = $viatura->kilometragem;
        // $viatura->kilometragem = $request->manometro_km;

        // if($request->manometro_combustivel != null || $request->manometro_combustivel > 0){
        //     $viatura->qtd_disponivel = $request->manometro_combustivel;
        // }else{
        //     $kmPercorridos = ($last_checklist->km_inicio - $request->manometro_km);
        //     if($kmPercorridos >=0){
        //         $qtd_consumida = ($viatura->capacidade_media*$kmPercorridos);
        //         $remanescente = ($viatura->qtd_disponivel - $qtd_consumida);
        //         if($remanescente > $viatura->capacidade_tanque){
        //              $viatura->qtd_disponivel = 0;
        //         }else{
        //           $viatura->qtd_disponivel = $remanescente;
        //         }

        //     }
        // }
        // $viatura->update();

        if ($viaturaLeitura) {
            foreach ($request->rota_id as $key => $rotas) {
                ViaturaRota::updateOrCreate([
                    'viatura_id' => $request->viatura_id, 'rota_id' => $rotas, 'createdBy' => auth()->user()->id, 'updatedBy' => auth()->user()->id, 'created_at'=>Carbon::now(),
                    'updated_at'=>Carbon::now()
                ]);
            }

            return response()->json(['message' => 'viatura escalada com sucesso']);
        }
    }

    public function show(Request $request, $id):JsonResponse
    {
        // $viaturaId = $request->route('id');

        $viaturas = $this->viaturaAlocada->ViewViaturaAlocada($id);

        return response()->json($viaturas, 200);

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id): JsonResponse
    {
        
        $viaturaDetails = $request->all();

        return response()->json([
            'data' => $this->viaturaAlocada->EditViaturaHistory($viaturaDetails, $id)
        ]);
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
