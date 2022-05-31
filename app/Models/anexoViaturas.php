<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class anexoViaturas extends Model
{
    use HasFactory;

    protected $fillable = [
        'anexos',
                'tipo_ficheiro',
                'viatura_id'
    ];

    public function viatura(){
        return $this->belongsTo(viatura::class);
    }
}
