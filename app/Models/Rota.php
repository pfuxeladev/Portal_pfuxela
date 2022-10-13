<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rota extends Model
{
    use HasFactory;

    protected $guard = 'api';
    protected $table = 'rotas';

    protected $fillable = [
        'nome_rota',
        'projecto_id',
        'tipoRota',
        'endereco',
        'distancia_km'
    ];

    public function projecto(){
        return $this->belongsTo(projecto::class);
    }

    public function abastecimento_rota(){
        return $this->hasMany(Abastecimento_rota::class);
    }

    public function ordem_viatura(){
        return $this->belongsToMany(ordem_viatura::class,'ordem_viatura_rotas', 'rota_id', 'ordem_viatura_id');
    }

    public function viatura(){
        return $this->belongsToMany(viatura::class, 'viatura_rotas', 'rota_id', 'viatura_id');
    }

    function ordemViaturaRota(){
        return $this->hasMany(OrdemViaturaRota::class);
    }

    public function horario(){
        return $this->hasMany(Horario::class);
    }





}
