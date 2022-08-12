<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ordem_viatura;
use Illuminate\Support\Carbon;
use PDF;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class ReportDatasdayCron extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'ReportAbastecimento:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

                $data["email"] = 'supportdesk@pfuxela.co.mz';
                $data["title"] = "Relatorio Semanal";
                // $data["body"] = "Receba em anexo o relatorio de abastecimento semanal enviado pelo sistema";


                $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->where('created_at', Carbon::now()->subdays(7))->orderBy('updated_at', 'desc')->get();

                $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

                $path = Storage::put('public/pdf/relatorio_semanal' . date('Y-m-d H:i:s') . '.pdf', $pdf->output());
                Mail::send('reportMail.relatorioAbastecimento', compact('ordem_viatura'), function ($message) use ($data, $pdf) {
                    $message->to($data["email"])
                        ->subject($data["title"])
                        ->attachData($pdf->output(), 'relatorio_semanal' . date('Y-m-d H:i:s') . '.pdf');
                });

                Log::info("Successful");
    }
}
