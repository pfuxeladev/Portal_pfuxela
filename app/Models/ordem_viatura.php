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
        'user_id'
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
    function ordemViaturaRota(){
        return $this->hasMany(OrdemViaturaRota::class);
    }
}
