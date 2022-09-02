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
        return $this->belongsToMany(Viatura::class);
    }

    function rota(){
        return $this->belongsToMany(Rota::class);
    }

    function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }
}
