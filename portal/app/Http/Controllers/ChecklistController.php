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

        $checkListOut = new CheckListOut();
        $checkListOut->viatura_id = $viatuara->id;
        $checkListOut->motorista_id = $motorista->id;
        $checkListOut->carta_conducao = $request->carta_conducao;
        $checkListOut->km_inicio = $request->km_inicio;
        $checkListOut->hr_inicio = $request->hr_inicio;
        $checkListOut->uniforme = $request->uniforme;
        $checkListOut->limpezaState = $request->limpezaState;
        $checkListOut->vasoEspansorState = $request->vasoEspansorState;
        $checkListOut->LiquidoVidroState = $request->LiquidoVidroState;
        $checkListOut->OleoMotorState = $request->OleoMotorState;
        $checkListOut->OleoDirecaoState = $request->OleoDirecaoState;
        $checkListOut->OleoTravoesState = $request->OleoTravoesState;
        $checkListOut->ACState = $request->ACState;
        $checkListOut->SistemaABS_State = $request->SistemaABS_State;
        $checkListOut->CintoSeguracaState = $request->CintoSeguracaState;
        $checkListOut->tipo_saida = $request->tipo_saida;
        $checkListOut->motorista_dss = $request->motorista_dss;
        $checkListOut->lista_presenca = $request->lista_presenca;
        $checkListOut->colete_saida = $request->colete_saida;
        $checkListOut->pneu_sobr_saida = $request->pneu_sobr_saida;
        $checkListOut->macaco_saida = $request->macaco_saida;
        $checkListOut->inspencao_saida = $request->inspencao_saida;
        $checkListOut->triangulo_saida = $request->triangulo_saida;
        $checkListOut->chave_roda_saida = $request->chave_roda_saida;
        $checkListOut->kit_reboque_saida = $request->kit_reboque_saida;
        $checkListOut->kit_1_socorros_saida = $request->kit_1_socorros_saida;
        $checkListOut->extintor_saida = $request->extintor_saida;
        $checkListOut->livrete_saida = $request->livrete_saida;
        $checkListOut->licenca_saida = $request->licenca_saida;
        $checkListOut->seguros_saida = $request->seguros_saida;
        $checkListOut->taxaradio_saida = $request->taxaradio_saida;
        $checkListOut->save();

        if($checkListOut){
            $viatuara->locate = 'OUT';
            $viatuara->update();
        }
    }
    }
}
