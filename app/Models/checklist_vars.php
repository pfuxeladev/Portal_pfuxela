<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class checklist_vars extends Model
{
    use HasFactory;

    public function checklistout(){
        return $this->hasMany(CheckListOut::class);
    }
}
