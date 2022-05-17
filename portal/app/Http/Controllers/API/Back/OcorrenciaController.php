<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\ocorrencia;
use App\Models\Viatura;
use Exception;
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


    public function generateUniqueCode()

    {

        do {

            $code = random_int(100000, 999999);

        } while (ocorrencia::where("codigo", "=", $code)->first());



        return $code;

    }
    public function store(Request $request)
    {
        $ocorrencia = new ocorrencia();

        $this->validate($request, [
            'descricao_ocorrencia'=>'required|string|max:255',
            'hora_da_ocorrencia'=>'required',
            'kilometragem'=>'required|numeric',
            'periodo'=>'required|string',
            'tipo_ocorrencia'=>'required|string',
            'motorista_id'=>'required|integer',
            'viatura_id'=>'required|integer'
        ]);
        $viatura = Viatura::where('id', $request->viatura_id)->first();

        if ($viatura->kilometragem > $request->kilometragem) {
          return response()->json(['error'=>'kilometragem registada é menor que a kilometragem actual da viatura'], 421);
        } else {

            $viatura->kilometragem = $request->kilometragem;
            $viatura->update();

            try {
                $ocorrencia->codigo = $this->generateUniqueCode();
                $ocorrencia->descricao_ocorrencia = $request->descricao_ocorrencia;
                $ocorrencia->viatura_id = $request->viatura_id;
                $ocorrencia->motorista_id = $request->motorista_id;
                $ocorrencia->hora_da_ocorrencia = $request->hora_da_ocorrencia;
                $ocorrencia->kilomatragem = $request->kilometragem;
                $ocorrencia->tipo_ocorrencia = $request->tipo_ocorrencia;
                $ocorrencia->periodo = $request->periodo;;
                $ocorrencia->data_ocorrencia = $request->data_ocorrencia;
                $ocorrencia->createdBy = auth()->user()->id;
                $ocorrencia->save();

                return response()->json(['message'=>'ocorrencia registada com sucesso'],200);
            } catch (Exception $e) {
                return response()->json(['error'=>'Erro no registo da ocorrencia'], 421);
            }
        }


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
