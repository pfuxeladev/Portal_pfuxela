<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CheckListOut extends Model
{
    protected $table = 'checklist_out';
    use HasFactory;

    function viatura(){
        return $this->belongsTo(Viatura::class);
    }


    function motorista(){
        return $this->belongsTo(motorista::class);
    }

    function checklistOutDestination(){
        return $this->hasMany(checklistOutDestination::class, 'check_list_out_id', 'id');
    }

    function checkListIn(){
        return $this->hasOne(checkListIn::class);
    }
}
