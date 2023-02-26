<?php

namespace App\Http\Services;

use App\Repositories\OrderReportRepository;

class OrderHistoryService{


    protected $OrderReports;

    function __construct(OrderReportRepository $OrderReports){
        $this->OrderReports = $OrderReports;
    }
    function getWeekOrderReport($ordens){

        $dates = \Carbon\Carbon::today()->subDays(20);
        $periodo = "Semanal";
        return $this->OrderReports->CreateOrderReport($dates, $ordens, $periodo);
    }

    function CreateMonthlyOrderReport($ordens){
        $dates = \Carbon\Carbon::today()->subDays(31);
        $periodo = "Mensal";
        return $this->OrderReports->CreateOrderReport($dates, $ordens, $periodo);
    }

    function CreateDailyOrderReport($ordens){
        $dates = \Carbon\Carbon::today()->subDays(1);
        $periodo = "Diario";
        return $this->OrderReports->CreateOrderReport($dates, $ordens, $periodo);
    }
}
