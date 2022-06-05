<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class combustivelBomba extends Model
{
    use HasFactory;

    protected $table = "combustivel_bombas";

    protected $fillable = ['bomba_id', 'combustivel_id', 'preco_actual'];

    function combustivel(){
        return $this->belongsTo(combustivel::class, 'combustivel_id', 'id');
    }

    function bomba(){
        return $this->belongsTo(bomba::class, 'bomba_id', 'id');
    }

}
