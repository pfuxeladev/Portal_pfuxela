<?php

namespace App\Models;

use App\Models\abastecimento;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon as SupportCarbon;

class Ordem extends Model
{
    use HasFactory;


    const ESTADO_AUTH = 'Autorizado';
    const ESTADO_CANC = 'Cancelada';
    const ESTADO_PEND = 'Pendente';
    const TIPO_EXTRA = 'extra';
    const TIPO_ROTA = 'rota';
    const TIPO_BOMBA = 'bombas';

    public function bombas(){
        return $this->belongsTo(Bombas::class);
    }

    public function viatura(){
        return $this->belongsToMany(Viatura::class, 'ordem_viaturas', 'ordem_id', 'viatura_id');
    }
    public function ordem_viatura(){
        return $this->hasMany(ordem_viatura::class, 'ordem_id', 'id');
    }

    public function abastecimento(){
        return $this->hasMany(abastecimento::class, 'ordem_id', 'id');
    }
    function abastecimento_rota(){
        return $this->hasMany(Abastecimento_rota::class);
    }

    function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }
    function approvedBy(){
        return $this->belongsTo(User::class, 'approvedBy', 'id');
    }

    public function abastecimentoBomba(){
        return $this->hasMany(abastecimento_bomba::class, 'ordem_id', 'id');
    }

    public function abastecimentoExtra(){
        return $this->hasMany(abastecimentoExtra::class, 'ordem_id', 'id');
    }
    public function scopeAuthorized( $query )
    {
        return $query->where( 'estado', self::ESTADO_AUTH );
    }
    public function scopPending( $query )
    {
        return $query->where( 'estado', self::ESTADO_PEND );
    }
    public function scopeCancelled( $query )
    {
        return $query->where( 'estado', self::ESTADO_CANC );
    }
     function scopeExtraType( $query )
    {
        return $query->where( 'tipo_ordem', self::TIPO_EXTRA );
    }

    function scopeSumDataBySupply($query, $date, $id){
        return $query->where('ordems.created_at', '>=',$date)->where('ordems.bombas_id',$id);
    }

    function scopePeriodicReport($query, $date){
        return $query->where('ordems.created_at', '>=',$date);
    }

}
