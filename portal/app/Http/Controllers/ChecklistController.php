<?php

namespace App\Http\Controllers;

use App\Models\checkListIn;
use App\Models\CheckListOut;
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
        
    }
}
