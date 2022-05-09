<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckListRota extends Model
{
    use HasFactory;

    protected $fillable = [
        'rota_id', 'check_list_out_id'
    ];

    function rota(){
        return $this->belongsTo(Rota::class);
    }

    function checklistOut(){
        return $this->belongsTo(checklistOut::class, 'check_list_out_id', 'id');
    }
}
