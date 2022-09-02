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

<<<<<<< HEAD
    public function ordem_viatura(){
        return $this->belongsToMany(ordem_viatura::class,'ordem_viatura_rotas', 'rota_id', 'ordem_viatura_id');
    }

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    public function viatura(){
        return $this->belongsToMany(viatura::class);
    }

    function ordemViaturaRota(){
        return $this->hasMany(OrdemViaturaRota::class);
    }

    public function horario(){
        return $this->hasMany(Horario::class);
    }
<<<<<<< HEAD


   


=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
}
