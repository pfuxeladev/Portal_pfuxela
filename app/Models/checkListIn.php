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

<<<<<<< HEAD
    function CheckListOut(){
        return $this->belongsTo(CheckListOut::class, 'check_list_out_id', 'id');
    }

    function checklist(){
        return $this->hasMany(checklists::class, 'check_list_in_id', 'id');
=======
    function checkListOut(){
        return $this->belongsTo(checkListOut::class);
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    }

    function user(){
        return $this->belongsTo(User::class);
    }


}
