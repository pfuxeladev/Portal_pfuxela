<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Departamento extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'descricao',
        'empresa_id'
    ];

    public function empresa(){
        return $this->belongsToMany(Empresa::class);
    }

    public function user(){
        return $this->hasMany(User::class);
    }
}
