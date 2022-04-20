<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\ocorrencia;
use Illuminate\Http\Request;

class OcorrenciaController extends Controller
{
    private $ocorrencia;

    function __construct(ocorrencia $ocorrencia)
    {
        $this->ocorrencia = $ocorrencia;
    }
    public function index()
    {
        return $this->ocorrencia->orderBy('created_at', 'desc')->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $correncia = new ocorrencia();

        $this->validate($request, [
            'descricao_ocorrencia'=>'required|string|max:255',
            'hora_da_ocorrencia'=>'required',
            'kilometragem'=>'required|numeric',
            'periodo'=>'required|string',
            'tipo_ocorrencia'=>'required|string',
            'motorista_id'=>'required|integer',
            'viatura_id'=>'required|integer'
        ]);

        $correncia->descricao_ocorrencia = $request->descricao_ocorrencia;

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ocorrencia  $ocorrencia
     * @return \Illuminate\Http\Response
     */
    public function show(ocorrencia $ocorrencia)
    {
        //
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
