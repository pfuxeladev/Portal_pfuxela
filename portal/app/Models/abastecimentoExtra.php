<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class abastecimentoExtra extends Model
{
    use HasFactory;


    public function abastecimento()
    {
        return $this->belongsTo(abastecimento::class, 'abastecimento_id', 'id');
    }

    /**
     * Get the user that owns the abastecimentoExtra
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function viatura()
    {
        return $this->belongsTo(Viatura::class, 'viatura_id', 'id');
    }

    public function motorista()
    {
        return $this->belongsTo(motorista::class, 'motorista_id', 'id');
    }

}
