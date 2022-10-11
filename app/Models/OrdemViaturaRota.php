<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrdemViaturaRota extends Model
{
    use HasFactory;

    protected $fillable = [
        'rota_id',
        'qtd',
        'preco_total',
        'justificacao',
        'distancia'
    ];

    function rota(){
        return $this->belongsTo(Rota::class, 'rota_id', 'id');
    }

    function ordem_viatura(){
        return $this->belongsTo(ordem_viatura::class, 'ordem_viatura_id', 'id');
    }
}
