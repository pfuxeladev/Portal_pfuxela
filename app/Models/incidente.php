<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class incidente extends Model
{
    use HasFactory;

    function checkListIn(){
        return $this->hasMany(checkListIn::class);
    }
}
