<?php

namespace App\Mail;

use App\Models\ordem_viatura;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Carbon;
class ReportDatasMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $details, $subject, $view;

    public function __construct($details, $subject, $view)
    {
        $this->details = $details;
        $this->subject = $subject;
        $this->view = $view;
    }

    public function build()
    {
        return $this->subject($this->subject)
                    ->view($this->view, ['details' => $this->details]);
    }
}
