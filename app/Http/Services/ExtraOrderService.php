<?php

namespace App\Http\Services;

use App\Http\Resources\ExtraOrder;
use App\Models\Ordem;
use App\Repositories\ExtraOrder as RepositoriesExtraOrder;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ExtraOrderService {

    protected $Orders;
    protected $extraOrder;

    function __construct(Ordem $order, RepositoriesExtraOrder $extraOrder){
        $this->orders = $order;
        $this->extraOrder = $extraOrder;
    }

    function getWeekReport(){
        $this->extraOrder->where('estado', Ordem::ESTADO_AUTH);
    }

    function getMonthlyReport(){

    }
}
