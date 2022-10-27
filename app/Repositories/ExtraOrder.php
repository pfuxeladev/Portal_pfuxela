<?php

namespace App\Repositories;

use App\Http\Resources\ExtraOrder as ResourcesExtraOrder;
use App\Models\Ordem;
use PDF;
use Carbon\Carbon;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

// use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
//use Your Model

/**
 * Class ExtraOrder.
 */
class ExtraOrder
{
    protected $extraOrder;

    function __construct(Ordem $extraOrder){
        $this->extraOrder = $extraOrder;
    }

    public function model()
    {
        return Ordem::class;
    }

    function CreateWeeklyReport(){
       $MailOrderSender = $this->extraOrder->Authori()->with(['viatura', 'abastecimento.bombas', 'ordem_viatura'])
       ->join('abastecimentos', 'ordems.id', '=', 'abastecimentos.ordem_id')
       ->join('abastecimento_extras', 'abastecimentos.id', '=', 'abastecimento_extras.abastecimento_id')
       ->select('ordems.id as id', 'abastecimentos.bombas_id', 'ordems.codigo_ordem', 'ordems.created_at as data_criacao', 'ordems.estado', 'ordems.createdBy', 'ordems.approvedBy', 'abastecimentos.qtd_ant', 'abastecimentos.qtd_rec', 'abastecimento_extras.destino', 'abastecimento_extras.qtd', 'abastecimento_extras.descricao')
        ->where('ordems.created_at', '>=', Carbon::today()->subDays(7))
        ->get();

        return $this->sendEmailOrders($MailOrderSender);
    }

    function CreateMonthlyReport(){
        $monthlyExtraOderMail = $this->extraOrder->ExtraType()->with(['viatura', 'bombas'])
       ->join('abastecimentos', 'ordems.id', '=', 'abastecimentos.ordem_id')
       ->join('abastecimento_extras', 'abastecimentos.id', '=', 'abastecimento_extras.abastecimento_id')
       ->where('ordems.created_at', '>=', Carbon::today()->subDays(30))
       ->get();

       return $this->sendEmailOrders($monthlyExtraOderMail);
    }

    function sendEmailOrders($MailsOrder){
        try {
            $data["email"] = ['mauro@pfuxela.co.mz', 'fausia@pfuxela.co.mz', 'supportdesk@pfuxela.co.mz', 'piquete@pfuxela.co.mz', 'financas@pfuxela.co.mz', 'contabilidade@corporategifts.co.mz'];
            $data["title"] = "Relatorio Semanal de Abastecimento extraordinarios";

            // return $MailsOrder;

            // return view('reportMail.OrdensExtrasReport', compact('MailsOrder'));

            $pdf = PDF::loadView('reportMail.OrdensExtrasReport', compact('MailsOrder'))->setOptions(['defaultFont' => 'Times New Roman']);

            Storage::put('public/pdf/relatorio_por_rota' . date('Y-m-d H:i:s') . '.pdf', $pdf->output());

            Mail::send('reportMail.message_report', $data, function ($message) use ($data, $pdf) {
                $message->to($data["email"])
                    ->subject($data["title"])
                    ->attachData($pdf->output(), 'relatorio_ordem_extras' . date('Y-m-d H:i:s') . '.pdf');
            });
            Log::info('email sent to: Users');
            return response()->json(['message' => 'email sent to: Users successfully']);
        }catch(Exception $e){

        }
    }
}
