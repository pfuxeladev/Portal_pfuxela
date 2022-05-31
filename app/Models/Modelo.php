<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class modelo extends Model
{
    use HasFactory;
    protected $table = 'modelos';

    protected $fillable = [
        'marca_id ',
        'descricao',
         
    ];
    public function marca(){
        return $this->belongsTo(marca::class);
    }

    public function viatura(){
        return $this->hasMany(viatura::class);
    }
}
