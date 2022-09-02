<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viatura extends Model
{
    use HasFactory;

    protected $guard = 'api';

<<<<<<< HEAD
    protected $fillable = [
        'qtd_disponivel',
        'kilometragem'
    ];

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    public function marca(){
        return $this->belongsTo(marca::class);
    }
    public function modelo(){
        return $this->belongsTo(Modelo::class);
    }

    public function viaturaDocument(){
        return $this->hasMany(viaturaDocument::class);
    }

    public function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }

    public function rota(){
        return $this->belongsToMany(Rota::class);
    }

    function anexo(){
        return $this->hasMany(anexoViaturas::class, 'viatura_id', 'id');
    }

    function ordem(){
        return $this->belongsToMany(Ordem::class, 'ordem_viaturas', 'viatura_id', 'ordem_id');
    }
<<<<<<< HEAD
    function ordem_viatura(){
        return $this->hasMany(ordem_viatura::class, 'viatura_id', 'id');
    }
=======



>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

}
