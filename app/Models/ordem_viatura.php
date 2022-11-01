<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ordem_viatura extends Model
{
    use HasFactory;

    protected $fillable = [
        'ordem_id',
        'viatura_id',
        'qtd_abastecida',
        'preco_cunsumo',
        'user_id',
        'justificacao',
        'updatedBy'
    ];
    public function viatura()
    {
        return $this->belongsTo(Viatura::class, 'viatura_id', 'id');
    }
    public function ordem()
    {
        return $this->belongsTo(Ordem::class);
    }

    public function ordemAbastecer(){
        return $this->belongsTo(Ordem::class, 'ordem_id', 'id');
    }
    public function rota(){
        return $this->belongsToMany(Rota::class, 'ordem_viatura_rotas','ordem_viatura_id', 'rota_id');
    }
    function ordemViaturaRota(){
        return $this->hasMany(OrdemViaturaRota::class, 'ordem_viatura_id', 'id');
    }

    function scopePeriodicReport($query, $datesInterval){
        return $query->where('ordems.created_at','>=', $datesInterval);
    }

}
