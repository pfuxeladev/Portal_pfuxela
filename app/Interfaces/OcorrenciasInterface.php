<?php
namespace App\Interfaces;


interface OcorrenciasInterface{

    public function CriarOcorrencias(array $params);
    public function CriarFichaDeObra(array $params, $ocorrenciaId);
    public function GerarOcorrencia($ocorrenciaId);
    public function VerOcorrencia($ocorrenciaId);
    public function ActualizarOcorrencia(array $params, $ocorrenciaId);
    public function mudarEstado(array $params, $ocorrenciaId);
    public function ListarOcorrencias();
    public function enviarOcorrencia(array $dados);

}
