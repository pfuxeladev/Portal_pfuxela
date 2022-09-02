<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class combustivel extends Model
{
    use HasFactory;

    protected $fillable = [
        'tipo_combustivel'
    ];

    function viatura(){
        return $this->belongsTo(viatura::class);
    }

    public function bomba(){
        return $this->belongsToMany(bomba::class, 'combustivel_bombas', 'combustivel', 'bomba_id');
    }

   
}
