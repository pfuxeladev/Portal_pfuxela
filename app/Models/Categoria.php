<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    use HasFactory;
<<<<<<< HEAD

    protected $fillable = [
        'nome_categoria',
        'createdBy'
    ];

    public function checklist_vars(){
        return $this->hasMany(checklist_vars::class, 'categoria', 'id');
    }


=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
}
