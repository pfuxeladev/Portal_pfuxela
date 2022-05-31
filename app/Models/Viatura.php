<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viatura extends Model
{
    use HasFactory;

    protected $guard = 'api';

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




}
