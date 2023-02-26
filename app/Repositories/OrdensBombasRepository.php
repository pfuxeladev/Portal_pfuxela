<?php

namespace App\Repositories;

use App\Models\Bombas;
use App\Models\Ordem;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
//use Your Model
use PDF;
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
                    'total'=>$this->orders->SumDataBySupply($date_week, $bomba->id)->leftJoin('ordem_viaturas', 'ordem_viaturas.ordem_id', '=', 'ordems.id')->sum('ordem_viaturas.preco_cunsumo'),
            ];
        }
        return $ordens;
    }

    function FetchMonthlyReport(array $ordens){
        $supplier =  $this->bombas->Active()->with('combustivel')->orderBy('nome_bombas', 'asc')->get();

        $date_week = Carbon::now()->subDays(30);

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
                      'total'=>$this->orders->SumDataBySupply($date_week, $bomba->id)->leftJoin('ordem_viaturas', 'ordem_viaturas.ordem_id', '=', 'ordems.id')->sum('ordem_viaturas.preco_cunsumo'),
              ];
          }
          return $ordens;
        //   return $this->sendEmailReports($ordens);
      }

      protected function sendEmailReports($relatorios){
        try {


            $data["email"] = ['mauro@pfuxela.co.mz', 'fausia@pfuxela.co.mz', 'supportdesk@pfuxela.co.mz', 'piquete@pfuxela.co.mz', 'financas@pfuxela.co.mz', 'contabilidade@corporategifts.co.mz'];
            $data["title"] = "Relatorio Semanal das ordems de abastecimento feito nas bombas";

            // $relatorios = $this->ordensBombas->GetWeekReport($ordens);

            // return response()->json([$relatorios],200);
            // return view('reportMail.relatorio_bombas', compact('relatorios'));
            $pdf = PDF::loadView('reportMail.relatorio_bombas', compact('relatorios'));

            // return $pdf->download('Relatorio'.date('Y-m-d H:i:s').'.pdf');

            $path = Storage::put('public/pdf/relatorio_bombas' . date('Y-m-d H:i:s') . '.pdf', $pdf->output());
            Mail::send('reportMail.message_report', $data, function ($message) use ($data, $pdf) {
                $message->to($data["email"])
                    ->subject($data["title"])
                    ->attachData($pdf->output(), 'relatorio_bombas' . date('Y-m-d H:i:s') . '.pdf');
            });
            Log::info('email sent to: Users');
            return response()->json(['message' => 'email sent to: Users successfully']);
        } catch (Exception $e) {
            return response()->json(['error'=>"Something went wrong! " . $e->getMessage()], 500);
        }
    }

    function SearchSupplyOrderReport(array $dados, $id, $ordens){
        $supplier =  $this->bombas->Active()->with('combustivel')->find($id);

       if(!empty($dados)){
        $ordens = [
            'nome_bombas'=>$supplier->nome_bombas,
            'combustivel'=>$supplier->combustivel,
            'ordens'=>$this->orders->join('ordem_viaturas', 'ordem_viaturas.ordem_id', '=', 'ordems.id')
            ->join('viaturas', 'ordem_viaturas.viatura_id','=','viaturas.id')
            ->join('ordem_viatura_rotas', 'ordem_viatura_rotas.ordem_viatura_id', '=','ordem_viaturas.id')
            ->join('rotas', 'ordem_viatura_rotas.rota_id', '=','rotas.id')
            ->join('projectos', 'rotas.projecto_id','=','projectos.id')
            ->leftJoin('users', 'ordems.createdBy','=', 'users.id')
            ->select('ordems.id', 'ordems.codigo_ordem as codigo_ordem','ordems.updated_at as data_emissao','viaturas.matricula as matricula','viaturas.capacidade_tanque as capacidade_tanque','viaturas.capacidade_media as ltr_km','viaturas.tipo_combustivel','viaturas.kilometragem', 'viaturas.kilometragem_ant', 'ordems.estado as estado','ordem_viaturas.qtd_abastecida as qtd_abastecida','ordems.approvedBy','ordem_viaturas.preco_cunsumo as preco_consumo', 'users.name as usuario', 'rotas.nome_rota','projectos.name')
            ->orderBy('ordems.updated_at', 'desc')
            ->where('ordems.bombas_id', $supplier->id)
            ->where('codigo.codigo_ordem', 'like', '%' . $dados['q'] . '%')
            ->orWhere('viaturas.matricula', 'like', '%' . $dados['q'] . '%')
            ->orWhere('rotas.nome_rota', 'like', '%' . $dados['q'] . '%')
            ->orWhere('users.name', 'like', '%' . $dados['q'] . '%')
            ->orderBy('ordems.created_at', 'ASC')->paginate($dados['perPage']),
        ];
        if($dados['intervalo'])
        return $ordens;
       }else{
        $ordens = [
            'nome_bombas'=>$supplier->nome_bombas,
            'combustivel'=>$supplier->combustivel,
            'ordens'=>$this->orders->join('ordem_viaturas', 'ordem_viaturas.ordem_id', '=', 'ordems.id')
            ->join('viaturas', 'ordem_viaturas.viatura_id','=','viaturas.id')
            ->join('ordem_viatura_rotas', 'ordem_viatura_rotas.ordem_viatura_id', '=','ordem_viaturas.id')
            ->join('rotas', 'ordem_viatura_rotas.rota_id', '=','rotas.id')
            ->join('projectos', 'rotas.projecto_id','=','projectos.id')
            ->leftJoin('users', 'ordems.createdBy','=', 'users.id')
            ->select('ordems.id', 'ordems.codigo_ordem as codigo_ordem','ordems.updated_at as data_emissao','viaturas.matricula as matricula','viaturas.capacidade_tanque as capacidade_tanque','viaturas.capacidade_media as ltr_km','viaturas.tipo_combustivel','viaturas.kilometragem', 'viaturas.kilometragem_ant', 'ordems.estado as estado','ordem_viaturas.qtd_abastecida as qtd_abastecida','ordems.approvedBy','ordem_viaturas.preco_cunsumo as preco_consumo', 'users.name as usuario')
            ->orderBy('ordems.updated_at', 'desc')->where('ordems.bombas_id', $supplier->id)->orderBy('ordems.created_at', 'ASC')->paginate($dados['perPage']),
        ];

        return $ordens;
       }

    }
}
