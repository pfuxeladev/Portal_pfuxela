<?php
namespace App\Interfaces;


interface OrdensBombasInterface{

    public function GetWeekReport(array $ordens);
    public function GetMonthlyReport();
}
