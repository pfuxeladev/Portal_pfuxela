<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class checkListIn extends Model
{
    protected $table = 'checklist_in';
    use HasFactory;

    function incidente(){
        return $this->belongsTo(incidente::class);
    }
    function viatura(){
        return $this->belongsTo(Viatura::class);
    }


    function motorista(){
        return $this->belongsTo(motorista::class);
    }

    function checkListOut(){
        return $this->belongsTo(checkListOut::class);
    }

    function user(){
        return $this->belongsTo(User::class);
    }


}
