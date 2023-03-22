<?php

namespace App\Models\NewModule;

use App\Models\Ordem;
use App\Models\Viatura;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdministrativeOrder extends Model
{
    use HasFactory;

    protected $table= 'Administratives';

    public function viatura(){
        return $this->belongsTo(Viatura::class);
    }
     public function ordem(){
        return $this->belongsTo(Ordem::class, 'ordem_id', 'id');
     }
}
