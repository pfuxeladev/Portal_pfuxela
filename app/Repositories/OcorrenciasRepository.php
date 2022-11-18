<?php

namespace App\Repositories;

use App\Interfaces\OcorrenciasInterface;
use App\Models\ocorrencia;
use App\Models\Viatura;
use Exception;

class OcorrenciasRepository implements OcorrenciasInterface{

    protected $ocorrencias;

    function __construct(ocorrencia $ocorrencias)
    {
        $this->ocorrencias = $ocorrencias;
    }

    function ListarOcorrencias()
    {
     return $this->ocorrencias->with(['viatura', 'createdBy', 'motorista.person'])->orderBy('created_at', 'desc')->paginate(10);
    }

    public function generateUniqueCode()

    {

        do {

            $code = random_int(100000, 999999);

        } while (ocorrencia::where("codigo", "=", $code)->first());



        return $code;

    }
    function CriarOcorrencias(array $datas)
    {
        $viatura = Viatura::where('id', $datas['viatura_id'])->first();

        if ($viatura->kilometragem > $datas['kilometragem']) {
          return response()->json(['error'=>'kilometragem registada é menor que a kilometragem actual da viatura'], 421);
        } else {

            $viatura->kilometragem = $datas['kilometragem'];
            $viatura->update();

            try {
                $ocorrencia_code =ocorrencia::orderBy('created_at', 'desc')->first();
                if(!empty($ocorrencia_code)){
                    $this->ocorrencias->codigo = $ocorrencia_code->codigo +1;
                }else{
                    $this->ocorrencias->codigo = $this->generateUniqueCode();
                }
               $this->ocorrencias->descricao_ocorrencia = $datas['descricao_ocorrencia'];
               $this->ocorrencias->viatura_id = $datas['viatura_id'];
               $this->ocorrencias->motorista_id = $datas['motorista_id'];
               $this->ocorrencias->hora_da_ocorrencia = $datas['hora_da_ocorrencia'];
               $this->ocorrencias->kilomatragem = $datas['kilometragem'];
               $this->ocorrencias->tipo_ocorrencia = $datas['tipo_ocorrencia'];
               $this->ocorrencias->periodo = $datas['periodo'];
               $this->ocorrencias->data_ocorrencia = $datas['data_ocorrencia'];
               $this->ocorrencias->createdBy = auth()->user()->id;
               $this->ocorrencias->save();

                return response()->json(['message'=>'ocorrencia registada com sucesso'],200);
            } catch (Exception $e) {
                return response()->json(['error'=>'Erro no registo da ocorrencia'], 421);
            }
        }
    }
    public function ActualizarOcorrencia(array $params, $ocorrenciaId){

    }
    public function mudarEstado(array $params, $ocorrenciaId){

    }

    public function VerOcorrencia($ocorrenciaId)
    {
        return $this->ocorrencias->with(['viatura','motorista.person', 'createdBy'])->find($ocorrenciaId);
    }

    function CriarFichaDeObra(array $Dados, $ocorrenciaId)
    {

    }

    function enviarOcorrencia(array $params)
    {

    }
    function GerarOcorrencia($ocorrenciaId)
    {

    }


}
