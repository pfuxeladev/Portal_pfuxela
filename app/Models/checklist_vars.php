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

    public function checklists(){
        return $this->hasMany(checklists::class);
    }

    public function checklist_role(){
        return $this->hasMany(checkListRole::class);
    }

    public function categoria(){
        return $this->belongsTo(Categoria::class, 'categoria', 'id');
    }
}
