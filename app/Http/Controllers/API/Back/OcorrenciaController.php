<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Interfaces\OcorrenciasInterface;
use App\Models\ocorrencia;
use App\Models\Viatura;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OcorrenciaController extends Controller
{
    private $ocorrencia;

    protected $ocorrenciaProvider;

    function __construct(OcorrenciasInterface $ocorrencia)
    {
        $this->ocorrencia = $ocorrencia;
    }

    public function index()
    {
        return $this->ocorrencia->ListarOcorrencias();
    }



    public function store(Request $request)
    {

        $this->validate($request, [
            'descricao_ocorrencia'=>'required|string|max:255',
            'hora_da_ocorrencia'=>'required',
            'kilometragem'=>'required|numeric',
            'periodo'=>'required|string',
            'tipo_ocorrencia'=>'required|string',
            'motorista_id'=>'required|integer',
            'viatura_id'=>'required|integer'
        ]);

       return $this->ocorrencia->CriarOcorrencias($request->all());

    }


    public function show($id): JsonResponse
    {
        return response()->json($this->ocorrencia->VerOcorrencia($id), 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ocorrencia  $ocorrencia
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ocorrencia $ocorrencia)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ocorrencia  $ocorrencia
     * @return \Illuminate\Http\Response
     */
    public function destroy(ocorrencia $ocorrencia)
    {
        //
    }
}
