<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Empresa extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome_empresa',
        'email_empresa',
        'endereco_empresa',
        'tipo_empresa',
        'site_empresa'
    ];

    public function departamento(){
        return $this->belongsToMany(Departamento::class);
    }

    protected function contacto(){
        return $this->hasMany(Contactos::class, 'empresa_id', 'id');
    }


}
