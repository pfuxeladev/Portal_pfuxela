<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class checkListRole extends Model
{
    use HasFactory;

    function checklist_vars(){
        return $this->belongsTo(checklist_vars::class);
    }
}
