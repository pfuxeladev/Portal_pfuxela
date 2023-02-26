<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ocorrencia extends Model
{
    use HasFactory;

    const PENDING_STATE = 'pendente';
    const CLOSED_STATE = 'concluido';

    function viatura(){
        return $this->belongsTo(Viatura::class);
    }

    function createdBy(){
        return $this->belongsTo(User::class, 'createdBy', 'id');
    }

    function motorista(){
        return $this->belongsTo(motorista::class);
    }

    function scopePendingState($query){
        return $query->where('estado', self::PENDING_STATE);
    }
    
    function scopeClosedState($query){
        return $query->where('estado', self::CLOSED_STATE);
    }
}
