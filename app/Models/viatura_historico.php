<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class viatura_historico extends Model
{
    use HasFactory;

    protected $table = 'viatura_historicos';

    function viatura(){
        return $this->belongsTo(Viatura::class);
    }

    function motorista(){
        return $this->belongsTo(motorista::class);
    }
}
