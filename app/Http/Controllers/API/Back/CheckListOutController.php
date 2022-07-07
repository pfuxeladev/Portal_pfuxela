<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\CheckListOut;
use App\Models\checklistOutDestination;
use App\Models\motorista;
use App\Models\Viatura;
use Illuminate\Http\Request;

class CheckListOutController extends Controller
{
    private $checkListOut;

    function __construct(CheckListOut $checkListOut)
    {
        $this->checkListOut = $checkListOut;
    }
    public function index()
    {
        return $this->checkListOut->with(['viatura', 'motorista.person'])->orderBy('id', 'desc')->paginate(10);
    }

   function listViaturaDentro(){
       return Viatura::where('locate', 'IN')->where('estado', true)->get();
   }
   function kmActual(Request $request){
        if ($request->viatura_id) {
            return response()->json(Viatura::where('id', $request->viatura_id)->select('kilometragem')->first(), 200);
        }else{
            return 0;
        }
   }

   function ListMotoristas(){
       return motorista::join('people', 'motoristas.person_id', '=', 'people.id')->select('people.nome_completo as nome', 'motoristas.id')->orderBy('id','desc')->get();
   }
    public function store(Request $request)
    {
        $this->validate($request, [
            // 'tipo_saida'=>'required',
            'viatura_id'=>'required|integer|exists:viaturas,id',
            'motorista_id'=>'required|integer|exists:motoristas,id',
            'km_inicio'=>'required|numeric|min:0',
            'hora_inicio'=>'required',
            'limpezaState'=> 'required',
            'vasoEspansorState' =>'required|string',
            'LiquidoVidroState' =>'required|string',
            'OleoMotorState' =>'required|string',
            'OleoDirecaoState' =>'required|string',
            'OleoTravoesState' =>'required|string',
            'SistemaABS_State' =>'required|string',
        ], [
            'required'=>'O :attribute é obrigatório'
        ]);
        $viatura = Viatura::where('id', $request->viatura_id)->first();

        if ($viatura->kilometragem > $request->km_inicio) {
            return response()->json(['error'=>'kilometragem registada é menor que a kilometragem actual da viatura, Kilometragem actual: '.$viatura->kilometragem], 421);
        }

        if($viatura->estado == false || $viatura->locate == 'OUT'){
            return response()->json(['error' => 'A viatura desejada não se encontra fora do parque!'], 404);
        }

        $motorista = motorista::where('id', $request->motorista_id)->first();

        if(empty($motorista)){
            return response()->json(['error' => 'O motorista não foi encontrado!'], 404);
        }





        $checkListOut = new CheckListOut();
        $checkListOut->viatura_id = $viatura->id;
        $checkListOut->motorista_id = $motorista->id;
        $checkListOut->carta_conducao = $request->carta_conducao;
        $checkListOut->km_inicio = $request->km_inicio;
        $checkListOut->hr_inicio = $request->hora_inicio;
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
        if ($request->isRota == true) {
            $checkListOut->tipo_saida = 'ROTAS';
          }
          if ($request->isOuthers == true) {
              $checkListOut->tipo_saida = 'OUTROS';
            }
        $checkListOut->motorista_dss = $request->motorista_dss;
        $checkListOut->lista_presenca = $request->lista_presenca;
        $checkListOut->colete_saida = $request->colete_saida;
        $checkListOut->pneu_sobr_saida = $request->pneu_sobr_saida;
        $checkListOut->macaco_saida = $request->macaco_saida;
        $checkListOut->inspencao_saida = $request->inspencao_saida;
        $checkListOut->triangulo_saida = $request->triangulo_saida;
        $checkListOut->chave_roda_saida = $request->chave_roda_saida;
        $checkListOut->kit_reboque_saida = $request->kit_reboque_saida;
        $checkListOut->kit_1_socorros_saida = $request->kit_1_socorro_saida;
        $checkListOut->extintor_saida = $request->extintor_saida;
        $checkListOut->livrete_saida = $request->livrete_saida;
        $checkListOut->licenca_saida = $request->licenca_saida;
        $checkListOut->seguros_saida = $request->seguros_saida;
        $checkListOut->taxaradio_saida = $request->taxaradio_saida;
        $checkListOut->user_id = auth()->user()->id;
        $checkListOut->save();

        if($checkListOut){

            if ($checkListOut->tipo_saida === 'OUTROS') {
                checklistOutDestination::create([
                    'checklist_out_id'=>$checkListOut->id,
                    'descricao_trajecto'=>$request->trajecto,
                    'horaPrevistaSaida'=>$request->horaPrevistaSaida,
                    'horaPrevistaEntrada'=>$request->horaPrevistaEntrada,
                ]);
            }
            else if($checkListOut->tipo_saida === 'ROTAS'){
                    foreach ($request->rota_id as $key => $rota_id) {
                        $checkListOut->checkListRota()->create([
                            'rota_id'=>$rota_id
                        ]);
                    }

            }

            $viatura->locate = 'OUT';
            $viatura->update();

            return response()->json(['message'=>'viatura  inspencionada com sucesso']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CheckListOut  $checkListOut
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->checkListOut->with(['viatura', 'motorista'])->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CheckListOut  $checkListOut
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CheckListOut $checkListOut)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CheckListOut  $checkListOut
     * @return \Illuminate\Http\Response
     */
    public function destroy(CheckListOut $checkListOut)
    {
        //
    }
}
