<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;


    public function empresa(){
        return $this->belongsTo(Empresa::class);
    }


    public function motorista(){
        return $this->hasOne(motorista::class);
    }

    protected function user(){
        return $this->hasOne(User::class);
    }
}
