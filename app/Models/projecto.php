<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class projecto extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'telephone',
        'address_xtense',
        'contact_emg',
        'nrPassagers',
        'recomendation',
        'createdBy',
        'updatedBy',
    ];
    public function rota(){
        return $this->hasMany(Rota::class);
    }
}
