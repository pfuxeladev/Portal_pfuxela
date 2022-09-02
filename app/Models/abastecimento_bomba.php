<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class abastecimento_bomba extends Model
{
    use HasFactory;

    public function bombas(){
        return $this->belongsTo(Bombas::class, 'bombas_id', 'id');
    }

    public function ordem(){
        return $this->belongsTo(Ordem::class, 'ordem_id', 'id');
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
}
