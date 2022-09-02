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

    function CheckListOut(){
        return $this->belongsTo(CheckListOut::class, 'check_list_out_id', 'id');
    }

    function checklist(){
        return $this->hasMany(checklists::class, 'check_list_in_id', 'id');
    }

    function user(){
        return $this->belongsTo(User::class);
    }


}
