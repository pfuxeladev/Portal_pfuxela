<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class checklists extends Model
{
    use HasFactory;

    protected $fillable = [
        'checklist_vars_id',
        'opcao',
        'check_list_out_id',
        'opcao_entrada'
    ];

    public function checklist_out(){
        return $this->belongsTo(CheckListOut::class, 'check_list_out_id','id');
    }

    public function checklist_in(){
        return $this->belongsTo(checkListIn::class, 'check_list_in_id', 'id');
    }

    public function checklist_vars(){
        return $this->belongsTo(checklist_vars::class, 'checklist_vars_id', 'id');
    }
}
