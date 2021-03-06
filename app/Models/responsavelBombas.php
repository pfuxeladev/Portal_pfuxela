<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class responsavelBombas extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'email_bomba', 'contacto', 'contacto_alt', 'bombas_id', 'createdBy', 'updatedBy'];

    public function bomba(){
        return $this->belongsTo(Bombas::class, 'bombas_id', 'id');
    }

    public function order(){
        return $this->hasMany(Ordem::class);
    }
}
