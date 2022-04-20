<?php

namespace App\Models;

use App\Models\API\BACK\Abastecimento;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ordem extends Model
{
    use HasFactory;


    public function bombas(){
        return $this->belongsTo(Bombas::class);
    }

    public function viatura(){
        return $this->belongsTo(Viatura::class);
    }

    function abastecimento(){
        return $this->hasMany(Abastecimento::class);
    }
    function abastecimento_rota(){
        return $this->hasMany(Abastecimento_rota::class);
    }

    function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }
}
