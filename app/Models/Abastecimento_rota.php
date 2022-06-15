<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Abastecimento_rota extends Model
{
    use HasFactory;

    protected $fillable = ['ordem_id', 'rota_id', 'qtd', 'turno'];

    public function rota(){
        return $this->belongsTo(Rota::class);
    }
}
