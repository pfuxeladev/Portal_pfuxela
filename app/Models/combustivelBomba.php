<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class combustivelBomba extends Model
{
    use HasFactory;

    protected $table = "combustivel_bombas";

<<<<<<< HEAD
    protected $fillable = ['bomba_id', 'combustivel_id', 'preco_actual'];
=======
    protected $fillable = ['bomba_id', 'combustivel_id'];
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

    function combustivel(){
        return $this->belongsTo(combustivel::class, 'combustivel_id', 'id');
    }

    function bomba(){
        return $this->belongsTo(bomba::class, 'bomba_id', 'id');
    }

}
