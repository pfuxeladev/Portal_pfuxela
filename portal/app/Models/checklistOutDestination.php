<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class checklistOutDestination extends Model
{
    use HasFactory;

    // protected $table = "check_list_out_destinations";

    protected $fillable = [
        'descricao_trajecto',
        'horaPrevistaSaida',
        'horaPrevistaEntrada',
    ];

    function checkList_out(){
        return $this->belongsTo(CheckListOut::class, 'check_list_out_id', 'id');
    }

}
