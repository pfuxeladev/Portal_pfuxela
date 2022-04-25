<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bombas extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_bombas',
        'tipo_bomba',
        'capacidade',
        'createdBy',
        // 'updatedBy'
    ];

    public function responsavel(){
        return $this->hasMany(responsavelBombas::class, 'bombas_id', 'id');
    }

    public function combustivel(){
        return $this->belongsToMany(combustivel::class, 'combustivel_bombas', 'combustivel_id', 'bomba_id');
    }

    public function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }

}
