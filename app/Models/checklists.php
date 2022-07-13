<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class checklists extends Model
{
    use HasFactory;

    public function checklist_out(){
        return $this->belongsTo(CheckListOut::class);
    }

    public function checklist_in(){
        return $this->belongsTo(checkListIn::class);
    }

    public function checklist_vars(){
        return $this->belongsTo(checklist_vars::class);
    }
}
