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
<<<<<<< HEAD
        return $this->hasMany(Rota::class);
=======
        return $this->hasMany(rota::class);
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    }
}
