<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bombas extends Model
{
    use HasFactory;

    const ACTIVE = 'disponivel';
    const INACTIVE = 'indisponivel';
    const INTERNA = 'interna';
    const EXTERNAL = 'externa';

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
        return $this->belongsToMany(combustivel::class, 'combustivel_bombas', 'bomba_id', 'combustivel_id');
    }
    public function combustivel_bomba(){
        return $this->hasMany(combustivelBomba::class, 'bomba_id', 'id');
    }
    public function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }

    function ordem(){
        return $this->hasMany(Ordem::class);
    }

    public function abastecimentoBomba(){
        return $this->hasMany(abastecimento_bomba::class, 'bombas_id', 'id');
    }

    public function scopeActive( $query )
    {
        return $query->where( 'status', self::ACTIVE );
    }

}
