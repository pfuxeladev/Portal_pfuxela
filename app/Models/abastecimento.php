<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class abastecimento extends Model
{
    use HasFactory;

    public function ordem(){
<<<<<<< HEAD
        return $this->belongsTo(Ordem::class, 'ordem_id', 'id');
=======
        return $this->belongsTo(Ordem::class);
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    }

    public function abastecimento_extra(){
        return $this->hasMany(abastecimentoExtra::class);
    }

    function abastecimentoRotaViatura(){
        return $this->hasMany(abastecimentoRotaViatura::class);
    }

<<<<<<< HEAD
    function user(){
        return $this->belongsTo(User::class);
    }

    function bombas(){
        return $this->belongsTo(Bombas::class);
    }

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
}
