<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Ordem;
class OrderSupply extends Mailable
{
    use Queueable, SerializesModels;

    private $ordem;

    public function __construct(Ordem $ordem)
    {
        $this->ordem = $ordem;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('info@pfuxela.co.mz', 'Example')
        ->view('emails.orders.shipped');
    }
}
