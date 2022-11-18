<?php

namespace App\Repositories;

use App\Interfaces\OrderHistoryInterface;
use App\Models\Ordem;
use App\Models\ordem_viatura;
use App\Models\OrdemViaturaRota;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use PDF;
use Illuminate\Support\Facades\Storage;
use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
class OrderReportRepository implements OrderHistoryInterface
{

    protected $OrdemViatura;
    protected $orders;

    function __construct(ordem_viatura $OrdemViatura, Ordem $orders){
        $this->OrdemViatura = $OrdemViatura;
        $this->orders = $orders;
    }

    function CreateOrderReport($date, $ordems, $periodo){

       $ordem_viatura = $this->OrdemViatura->PeriodicReport($date)->with(['viatura', 'ordem.bombas.combustivel'])
        ->leftJoin('ordems', 'ordem_viaturas.ordem_id','=','ordems.id')
        ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')
        ->join('viaturas', 'ordem_viaturas.viatura_id', '=','viaturas.id')
        ->join('ordem_viatura_rotas', 'ordem_viatura_rotas.ordem_viatura_id', '=', 'ordem_viaturas.id')
        ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')
        ->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
        ->select('ordem_viaturas.id','ordems.codigo_ordem','ordems.created_at', 'ordems.createdBy', 'ordems.estado', 'viaturas.matricula','viaturas.capacidade_media','viaturas.tipo_combustivel as combustivel','projectos.name', 'rotas.nome_rota', 'rotas.distancia_km', 'ordem_viaturas.qtd_abastecida', 'ordem_viaturas.preco_cunsumo as preco_total', 'bombas.nome_bombas')->get();

        foreach ($ordem_viatura as $key => $ordVi) {
            $rotas = OrdemViaturaRota::join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->where('ordem_viatura_rotas.ordem_viatura_id', $ordVi->id)->sum('rotas.distancia_km');

            $ordems[$key] = [
             'ordem_viatura_id'=>$ordVi->id,
             'codigo'=>$ordVi->codigo_ordem,
             'data_emissao'=>$ordVi->created_at,
             'criado_por'=>User::where('id', $ordVi->createdBy)->first(),
             'projecto'=>$ordVi->name,
             'rota_nome'=>$ordVi->nome_rota,
             'distancia'=>$ordVi->distancia_km,
             'matricula'=>$ordVi->matricula,
             'ltr_km'=>$ordVi->capacidade_media,
             'combustivel'=>$ordVi->combustivel,
             'qtd_abastecida'=>$ordVi->qtd_abastecida,
             'preco_total'=>$ordVi->preco_total,
             'bombas'=>$ordVi->nome_bombas,
             'estado'=>$ordVi->estado,
             'rota'=>$ordVi->rota,
             'dist_per_order'=>$rotas,
            ];
         }
        //  return $ordems;
        return $this->sendEmailOrders($ordems, $periodo);
    }

    protected function sendEmailOrders($ordems, $periodo){
        $data["email"] = ['mauro@pfuxela.co.mz', 'fausia@pfuxela.co.mz', 'supportdesk@pfuxela.co.mz', 'piquete@pfuxela.co.mz', 'financas@pfuxela.co.mz', 'contabilidade@corporategifts.co.mz'];
            $data["title"] = "Relatorio ".$periodo." de Abastecimentos feitos por Rota e Projectos";


            $pdf = PDF::loadView('reportMail.rotaReportOrders', compact('ordems'))->setOptions(['defaultFont' => 'Times New Roman']);
            Storage::put('public/pdf/relatorio_por_rota' . date('Y-m-d H:i:s') . '.pdf', $pdf->output());

            Mail::send('orderMail.RelatorioPorRotaMessage', $data, function ($message) use ($data, $pdf) {
                $message->to($data["email"])
                    ->subject($data["title"])
                    ->attachData($pdf->output(), 'relatorio_da_abastecimento_por_rota' . date('Y-m-d H:i:s') . '.pdf');
            });
            Log::info('email sent to: Users');
            return response()->json(['message' => 'email sent to: Users successfully']);
    }
}
