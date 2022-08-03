<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ocorrencia_checklist extends Model
{
    use HasFactory;

    protected $fillable = [
        'descricao',
        'situacao',
        'checklists_id'
    ];

    public function checkists(){
        return $this->belongsTo(checklists::class, 'checklists_id', 'id');
    }
}
