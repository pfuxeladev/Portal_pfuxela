<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class viatura_historico extends Model
{
    use HasFactory;

    function viatura(){
        return $this->belongsTo(Viatura::class, 'viatura_id','id');
    }
}
