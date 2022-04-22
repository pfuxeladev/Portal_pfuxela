<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    use HasFactory;

    protected $fillable = [
        'turno',
        'horaPartida',
        'horaChegada',
        'rota_id'
    ];

    function rota(){
        return $this->belongsTo(Rota::class);
    }
}
