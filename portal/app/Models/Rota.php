<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rota extends Model
{
    use HasFactory;

    protected $guard = 'api';

    public function projecto(){
        return $this->belongsTo(projecto::class);
    }

    public function abastecimento_rota(){
        return $this->hasMany(Abastecimento_rota::class);
    }

    public function viatura(){
        return $this->belongsToMany(viatura::class);
    }

    function ordemViaturaRota(){
        return $this->hasMany(OrdemViaturaRota::class);
    }

    public function horario(){
        return $this->hasMany(Horario::class);
    }
}
