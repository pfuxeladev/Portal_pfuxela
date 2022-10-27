<?php

namespace App\Http\Services;

use App\Models\Bombas;
use App\Repositories\OrdensBombasRepository;

class OrdensBombasService {

    protected $bombas;
    protected $ordensBombas;

    function __construct(Bombas $bombas, OrdensBombasRepository $ordensBombas){
        $this->bombas = $bombas;
        $this->ordensBombas = $ordensBombas;
    }

    function GetWeekReport($ordens){
       return $this->ordensBombas->FetchWeeklyReport($ordens);
    }
}
