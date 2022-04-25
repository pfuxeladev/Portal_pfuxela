<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class abastecimento extends Model
{
    use HasFactory;

    public function ordem(){
        return $this->belongsTo(ordem::class);
    }

    public function viatura(){
        return $this->belongsToMany(viatura::class, 'abastecimento_viaturas', 'abastecimento_id', 'viatura_id');
    }
}
