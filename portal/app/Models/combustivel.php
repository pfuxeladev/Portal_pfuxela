<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class combustivel extends Model
{
    use HasFactory;

    function viatura(){
        return $this->belongsTo(viatura::class);
    }

    public function bomba(){
        return $this->belongsToMany(bomba::class, 'combustivel_bombas', 'combustivel_id', 'bomba_id');
    }
   
}
