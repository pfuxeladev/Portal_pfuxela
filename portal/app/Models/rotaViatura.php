<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class rotaViatura extends Model
{
    use HasFactory;

    protected $guard = 'api';

    protected $table = 'rota_viaturas';

    public function rota(){
        return $this->belongsTo(rota::class, 'rota');
    }

    public function viatura(){
        return $this->belongsTo(viatura::class);
    }
}
