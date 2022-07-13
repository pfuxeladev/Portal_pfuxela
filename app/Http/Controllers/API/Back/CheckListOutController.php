<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\checklist_vars;
use App\Models\CheckListOut;
use App\Models\checklistOutDestination;
use App\Models\checkListRole;
use App\Models\checklists;
use App\Models\motorista;
use App\Models\Viatura;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class CheckListOutController extends Controller
{
    private $checkListOut;

    function __construct(CheckListOut $checkListOut)
    {
        $this->checkListOut = $checkListOut;
    }
    public function index()
    {
        return $this->checkListOut->with(['viatura', 'motorista.person'])->join('viaturas', 'checklist_out.viatura_id', '=', 'viaturas.id')->where('viaturas.locate', '=', 'OUT')->orderBy('checklist_out.id', 'desc')->paginate(10);
    }

   function listViaturaDentro(){
       return Viatura::where('viaturas.locate', 'IN')->where('viaturas.estado', true)->get();
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

   function storeChecklistVars(Request $request){
        $checklistVars = new checklist_vars();
        $email_roles = new checkListRole();

        $this->validate($request, [
            'checklist_name'=>'required|unique:checklist_vars,checklist_name,except,id',
            'categoria'=>'required',
            'email_forward'=>'required'
        ]);

        try {

        $checklistVars->checklist_name = $request->checklist_name;
        $checklistVars->categoria = $request->categoria;
        $checklistVars->createdBy = auth()->user()->id;
        $checklistVars->save();

        $email_roles->checklist_vars_id = $checklistVars->id;
        $email_roles->email_forward = $request->email_forward;
        $email_roles->save();

        return response()->json(['success'=>'adicionado'], 200);
        } catch (\Exception $e) {
            return response()->json(['erro'=>'Erro! contacte o administrador '.$e->getMessage()], 421);
        }

   }

   function getAttributesCheckList(){
    $checkList = checklist_vars::all();
    return response()->json($checkList, 200);
   }

    public function store(Request $request)
    {

        $this->validate($request, [
            // 'tipo_saida'=>'required',
            'viatura_id'=>'required|integer|exists:viaturas,id',
            'motorista_id'=>'required|integer|exists:motoristas,id',
            'km_inicio'=>'required|numeric|min:0',
            'hora_inicio'=>'required',
        ], [
            'required'=>'O :attribute é obrigatório'
        ]);
        $viatura = Viatura::where('id', $request->viatura_id)->first();

        if ($viatura->kilometragem > $request->km_inicio) {
            return response()->json(['error'=>'kilometragem registada é menor que a kilometragem actual da viatura, Kilometragem actual: '.$viatura->kilometragem], 421);
        }

        if($viatura->estado == false || $viatura->locate == 'OUT'){
            return response()->json(['error' => 'A viatura desejada se encontra fora do parque!'], 404);
        }

        $motorista = motorista::where('id', $request->motorista_id)->first();

        if(empty($motorista)){
            return response()->json(['error' => 'O motorista não foi encontrado!'], 404);
        }





        $checkListOut = new CheckListOut();
        $checkListOut->viatura()->associate($request->viatura_id);
        $checkListOut->motorista()->associate($request->motorista_id);
        $checkListOut->km_inicio = $request->km_inicio;
        $checkListOut->hr_inicio = $request->hr_inicio;
        $checkListOut->km_inicio = $request->km_inicio;
        $checkListOut->estado = $request->tipo_saida;
        $checkListOut->user_id = auth()->user()->id;
        $checkListOut->save();

        if($checkListOut){

            foreach ($request->checklist_var as $key => $var) {
               checklists::create([
                'checklist_vars_id'=>$var['id'],
                'opcao'=>$var['opcao'],
                'check_list_out_id'=>$checkListOut->id
               ]);
            }

            $checkList = checklists::where('check_list_out_id', $checkListOut->id)->get();
            foreach ($checkList as $key => $chk) {
               
            }
            $viatura->locate = 'OUT';
            $viatura->update();

            return response()->json(['message'=>'viatura inspencionada com sucesso']);
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
        return $this->checkListOut->with(['viatura', 'motorista'])->where('viatura_id', $id)->first();
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
