<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ckecklistOutDestination extends Model
{
    use HasFactory;

    function checkList_out(){
        return $this->belongsTo(CheckListOut::class, 'check_list_out_id', 'id');
    }
}
