<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ordem_viatura extends Model
{
    use HasFactory;

    protected $fillable = [
        'ordem_id',
        'viatura_id',
        'qtd_abastecida',
<<<<<<< HEAD
        'preco_cunsumo',
        'user_id',
        'justificacao',
        'updatedBy'
=======
        'user_id'
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    ];
    public function viatura()
    {
        return $this->belongsTo(Viatura::class, 'viatura_id', 'id');
    }
    public function ordem()
    {
<<<<<<< HEAD
        return $this->belongsTo(Ordem::class);
    }

    public function ordemAbastecer(){
        return $this->belongsTo(Ordem::class, 'ordem_id', 'id');
    }
    public function rota(){
        return $this->belongsToMany(Rota::class, 'ordem_viatura_rotas','ordem_viatura_id', 'rota_id');
    }
    function ordemViaturaRota(){
        return $this->hasMany(OrdemViaturaRota::class, 'ordem_viatura_id', 'id');
    }

=======
        return $this->belongsTo(Ordem::class, 'ordem_id', 'id')->withPivot('qtd_abastecida');
    }

    public function ordemAbastecer(){
        return $this->belongsTo(ordem::class, 'ordem_id', 'id');
    }
    function ordemViaturaRota(){
        return $this->hasMany(OrdemViaturaRota::class);
    }
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
}
