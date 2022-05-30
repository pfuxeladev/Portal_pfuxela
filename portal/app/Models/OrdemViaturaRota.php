<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrdemViaturaRota extends Model
{
    use HasFactory;

    function rota(){
        return $this->belongsTo(Rota::class);
    }

    function ordem_viatura(){
        return $this->belongsTo(ordem_viatura::class);
    }
}
