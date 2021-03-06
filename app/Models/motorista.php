<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class motorista extends Model
{
    use HasFactory;

    function person(){
        return $this->belongsTo(Person::class);
    }

    public function checkListOut(){
        return $this->hasMany(checkListOut::class);
    }
    
    public function checkListIn(){
        return $this->hasMany(checkListIn::class);
    }
}
