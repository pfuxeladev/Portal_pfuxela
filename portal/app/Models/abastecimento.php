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
        return $this->belongsTo(viatura::class);
    }
}
