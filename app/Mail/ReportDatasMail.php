<?php

namespace App\Mail;

use App\Models\ordem_viatura;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;
class ReportDatasMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->where('created_at', Carbon::now()->subdays(7))->orderBy('updated_at', 'desc')->get();
        $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));
        $path = Storage::put('public/pdf/ordem_abastecimento' . date('Y-m-d H:i:s'). '.pdf', $pdf->output());
        return $this->view('view.name');
    }
}
