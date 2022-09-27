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
    public function index()
    {
        $viatura_rota = $this->viatura_rota->with(['rota', 'viatura.viatura_historico'])->orderBy('created_at', 'desc')->paginate(15);

        return response($viatura_rota, 200);
    }

    public function historicoDeLeitura()
    {

    }

    public function getViatura($viatura_id)
    {
        return Viatura::where('id', $viatura_id)->first();
    }

    public function store(Request $request)
    {

        foreach ($request->rota['rota_id'] as $key => $rota_id) {
            $viatura_rota = ViaturaRota::where('rota_id', $rota_id)->where('viatura_id', $request->viatura_id)->where('created_at', '>=', Carbon::now()->subMinutes(360)->toDateTimeString())->first();

            if ($viatura_rota !=0) {
                // return $viatura_rota;
                return response(['error' => 'Nao pode alocar duas viaturas na mesma rota'], 421);
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
        

        if ($viaturaLeitura) {
            foreach ($request->rota['rota_id'] as $key => $rotas) {
                ViaturaRota::create([
                    'viatura_id' => $request->viatura_id, 'rota_id' => $rotas, 'createdBy' => auth()->user()->id, 'updatedBy' => auth()->user()->id
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
