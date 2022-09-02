<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class viaturaDocument extends Model
{
    use HasFactory;

    protected $fillable = [
        'data_licenca',
        'data_inspencao',
        'data_manifesto',
        'data_taxa_radio',
        'data_seguros',
        'prazo_licenca',
        'prazo_inspencao',
        'prazo_manifesto',
        'prazo_taxa_radio',
        'prazo_seguros',
        'viatura_id'
    ];

    public function viatura(){
        return $this->belongsTo(viatura::class);
    }
}
