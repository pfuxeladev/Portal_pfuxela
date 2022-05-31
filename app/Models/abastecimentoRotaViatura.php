<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class abastecimentoRotaViatura extends Model
{
    use HasFactory;

    protected $guard = 'api';

    protected $fillable = [
        'viatura_id',
        'abastecimento_rota_id',
        'createdBy',
        'updatedBy'
    ];



    public function rota()
    {
        return $this->belongsTo(Abastecimento_rota::class, 'abastecimento_rota_id', 'id');
    }

    public function viatura()
    {
        return $this->belongsTo(viatura::class);
    }
}
