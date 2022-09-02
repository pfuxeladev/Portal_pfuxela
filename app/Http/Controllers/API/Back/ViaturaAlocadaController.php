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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

   public function historicoDeLeitura(){

   }
    public function store(Request $request)
    {

        $viatura_rota = ViaturaRota::whereIn('rota_id', $request->rota['rota_id'])->where('viatura_id', $request->viatura_id)->where('created_at', '>=', Carbon::now()->subMinutes(360)->toDateTimeString())->get();
        if(!empty($viatura_rota)){
            return response(['error'=>'Nao pode duas viaturas na mesma rota'], 421);
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

            if ($viaturaLeitura) {
               foreach ($request->rota['rota_id'] as $key => $rotas) {
                   ViaturaRota::create([
                       'viatura_id'=>$request->viatura_id, 'rota_id'=>$rotas, 'createdBy'=>auth()->user()->id, 'updatedBy'=>auth()->user()->id
                   ]);
               }

               return response()->json(['message'=>'viatura escalada com sucesso']);
            }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
