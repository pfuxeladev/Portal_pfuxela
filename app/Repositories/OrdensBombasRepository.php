<?php

namespace App\Repositories;

use App\Models\Bombas;
use App\Models\Ordem;
use Carbon\Carbon;
use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
//use Your Model

/**
 * Class OrdensBombasRepository.
 */
class OrdensBombasRepository extends BaseRepository
{
   private $bombas = null;
    private $orders;

   function __construct(Bombas $bombas, Ordem $orders){
    $this->bombas = $bombas;
    $this->orders = $orders;
   }
    public function model()
    {
        return Ordem::class;
    }

    function FetchWeeklyReport(array $ordens){
      $supplier =  $this->bombas->Active()->with('combustivel')->orderBy('nome_bombas', 'asc')->get();

      $date_week = Carbon::now()->subDays(14);

        foreach ($supplier as $key => $bomba) {
            $ordens[$key] = [
                'bombas'=>$bomba->nome_bombas,
                'combustivel'=>$bomba->combustivel,
                'ordens'=>$this->orders->with(['ordem_viatura.rota','bombas'])->join('ordem_viaturas', 'ordem_viaturas.ordem_id', '=', 'ordems.id')
                ->join('viaturas','ordem_viaturas.viatura_id', '=','viaturas.id')
                ->join('users', 'ordems.createdBy', '=', 'users.id')
                    ->where('ordems.bombas_id', $bomba->id)->where('ordems.created_at', '>=', $date_week)
                    ->select('ordems.id', 'ordems.codigo_ordem as codigo_ordem','ordems.updated_at as data_emissao','viaturas.matricula as matricula','viaturas.capacidade_tanque as capacidade_tanque','viaturas.capacidade_media as ltr_km','viaturas.tipo_combustivel','viaturas.kilometragem', 'viaturas.kilometragem_ant', 'ordems.estado as estado','ordem_viaturas.qtd_abastecida as qtd_abastecida','ordems.approvedBy','ordem_viaturas.preco_cunsumo as preco_consumo', 'users.name as usuario')
                    ->orderBy('ordems.updated_at', 'desc')->get(),
                    'soma_total'=>$this->orders->SumDataBySupply($date_week, $bomba->id)->leftJoin('ordem_viaturas', 'ordem_viaturas.ordem_id', '=', 'ordems.id')->sum('ordem_viaturas.qtd_abastecida'),
            ];
        }
        return $ordens;
    }
}
