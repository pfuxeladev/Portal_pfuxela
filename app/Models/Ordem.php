<?php

namespace App\Models;

use App\Models\abastecimento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordem extends Model
{
    use HasFactory;


    public function bombas(){
        return $this->belongsTo(Bombas::class);
    }

    public function viatura(){
        return $this->belongsToMany(Viatura::class, 'ordem_viaturas', 'ordem_id', 'viatura_id');
    }
    public function ordem_viatura(){
<<<<<<< HEAD
        return $this->hasMany(ordem_viatura::class, 'ordem_id', 'id');
    }

    public function abastecimento(){
        return $this->hasMany(abastecimento::class, 'ordem_id', 'id');
=======
        return $this->hasMany(ordem_viatura::class);
    }

    public function abastecimento(){
        return $this->hasMany(abastecimento::class);
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    }
    function abastecimento_rota(){
        return $this->hasMany(Abastecimento_rota::class);
    }

    function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }
    function approvedBy(){
        return $this->belongsTo(User::class, 'approvedBy', 'id');
    }
<<<<<<< HEAD

    public function abastecimentoBomba(){
        return $this->hasMany(abastecimento_bomba::class, 'ordem_id', 'id');
    }
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
}
