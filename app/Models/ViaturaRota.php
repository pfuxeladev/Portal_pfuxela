<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ViaturaRota extends Model
{
    use HasFactory;

    protected $fillable = [
        'viatura_id', 'rota_id', 'createdBy', 'updatedBy'
    ];

    function viatura(){
        return $this->belongsTo(Viatura::class, 'viatura_id', 'id');
    }

    function rota(){
        return $this->belongsTo(Rota::class, 'rota_id', 'id');
    }

    function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }
}
