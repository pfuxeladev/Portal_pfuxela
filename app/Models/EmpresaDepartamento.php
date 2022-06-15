<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmpresaDepartamento extends Model
{
    use HasFactory;

    
    public function departamento(){
        return $this->belongsTo(Departamento::class);
    }
    public function empresa(){
        return $this->belongsTo(Empresa::class);
    }
}
