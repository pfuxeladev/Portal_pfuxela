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
}
