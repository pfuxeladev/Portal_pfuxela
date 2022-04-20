<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bombas extends Model
{
    use HasFactory;

    protected $fillable = [
        'refs',
        'nome_bombas',
        'tipo_bomba',
        'capacidade_bombas',
        'combustivel_bombas',
        'createdBy',
        // 'updatedBy'
    ];

    public function responsavel(){
        return $this->hasMany(responsavelBombas::class, 'bomba_id', 'id');
    }

    public function combustivel(){
        return $this->belongsToMany(combustivel::class, 'bomba_id', 'combustivel_id');
    }

   

}
