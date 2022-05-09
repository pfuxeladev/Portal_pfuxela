<?php

namespace App\Http\Controllers;

use App\Models\checkListIn;
use App\Models\CheckListOut;
use App\Models\motorista;
use App\Models\Viatura;
use Illuminate\Http\Request;

class ChecklistController extends Controller
{
    public function __construct(CheckListOut $checkListOut, checkListIn $checkListIn){
        $this->checkListOut = $checkListOut;
        $this->checkListIn = $checkListIn;
    }

    public function index(){
        return $this->checkListOut->paginate();
    }

    public function saveChacklistOut(Request $request){
        $viatuara = Viatura::where('id', 'viatura_id')->first();
        $motorista = motorista::where('id', 'motorista_id')->first();

        if(empty($motorista)){
            return response()->json(['error' => 'O motorista não foi encontrado!'], 404);
        }

        if(empty($viatuara)){
            return response()->json(['error' => 'A viatura não foi encontrada!'], 404);
        }

        if($viatuara->estado == false || $viatuara->locate == 'OUT'){
            return response()->json(['error' => 'A viatura desejada não se encontra disponível!'], 404);
        }
    }
}
