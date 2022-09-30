<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Viatura extends Model
{
    use HasFactory;

    protected $guard = 'api';

    protected $fillable = [
        'qtd_disponivel',
        'kilometragem'
    ];

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
        return $this->belongsToMany(Rota::class,'viatura_rotas', 'viatura_id', 'rota_id');
    }

    function anexo(){
        return $this->hasMany(anexoViaturas::class, 'viatura_id', 'id');
    }

    function ordem(){
        return $this->belongsToMany(Ordem::class, 'ordem_viaturas', 'viatura_id', 'ordem_id');
    }
    function ordem_viatura(){
        return $this->hasMany(ordem_viatura::class, 'viatura_id', 'id');
    }
    function check_list_in(){
        return $this->hasMany(checkListIn::class);
    }

     function viatura_historico(){
        return $this->hasMany(viatura_historico::class, 'viatura_id', 'id');
    }

}
