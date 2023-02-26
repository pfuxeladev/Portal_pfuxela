<?php
namespace App\Interfaces;

interface OrderHistoryInterface {

    function CreateOrderReport($date, array $ordems, $periodo);
}

