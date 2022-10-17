<?php

namespace App\Repositories;

use App\Models\Ordem;
use Carbon\Carbon;
use JasonGuru\LaravelMakeRepository\Repository\BaseRepository;
//use Your Model

/**
 * Class ExtraOrder.
 */
class ExtraOrder extends BaseRepository
{
    protected $extraOrder;

    function __construct(Ordem $extraOrder){
        $this->extraOrder = $extraOrder;
    }

    public function model()
    {
        return Ordem::class;
    }

    function CreateWeeklyReport(){
        $this->extraOrder->with(['abastecimento', 'viatura'])
        ->where('created_at', '>=', Carbon::parse());
    }
}
