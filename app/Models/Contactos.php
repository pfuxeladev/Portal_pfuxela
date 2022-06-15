<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contactos extends Model
{
    use HasFactory;

    protected $table = 'contactos';

    protected function empresa(){
        return $this->belongsTo(Empresa::class, 'empresa_id', 'id');
    }
    protected function person(){
        return $this->belongsTo(person::class, 'person_id', 'id');
    }
}
