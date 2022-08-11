<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ordem_viatura;
use Illuminate\Support\Carbon;
use Barryvdh\DomPDF\PDF;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use App\Models\User;

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
        foreach (User::all() as $key => $user) {


            if ($user->email === 'mauro@pfuxela.co.mz' && $user->email === 'fausia@pfuxela.co.mz' && $user->email === 'supportdesk@pfuxela.co.mz') {
                $data["email"] = $user->email;
                $data["title"] = "Relatorio Semanal";
                $data["body"] = "Receba em anexo o relatorio de abastecimento semanal enviado pelo sistema";


                $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->where('created_at', Carbon::now()->subdays(7))->orderBy('updated_at', 'desc')->get();

                $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

                $path = Storage::put('public/pdf/relatorioAbastecimento' . date('Y-m-d H:i:s') . '.pdf', $pdf->output());
                Mail::send($data["body"], $data, function ($message) use ($data, $pdf) {
                    $message->to($data["email"], $data["email"])
                        ->subject($data["title"])
                        ->attachData($pdf->output(), 'RelatorioSemanal' . date('Y-m-d H:i:s') . '.pdf');
                });
            }
        }
    }
}
