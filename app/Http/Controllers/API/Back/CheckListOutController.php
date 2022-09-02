<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
<<<<<<< HEAD
use App\Models\Categoria;
use App\Models\checklist_vars;
use App\Models\CheckListOut;
use App\Models\checklistOutDestination;
use App\Models\checkListRole;
use App\Models\checklists;
use App\Models\motorista;
use App\Models\ocorrencia_checklist;
use App\Models\Viatura;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Barryvdh\DomPDF\PDF;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
=======
use App\Models\CheckListOut;
use App\Models\motorista;
use App\Models\Viatura;
use Illuminate\Http\Request;

>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
class CheckListOutController extends Controller
{
    private $checkListOut;

    function __construct(CheckListOut $checkListOut)
    {
        $this->checkListOut = $checkListOut;
    }
<<<<<<< HEAD
    public function index(Request $request)
    {
        if($request->q){
            $viatura = Viatura::where('viaturas.locate', '=', 'OUT')->where('matricula', 'like', '%' . $request->q . '%')->orWhere('kilometragem', 'like', '%' . $request->q . '%' )->first();
            return $this->checkListOut->with(['viatura', 'motorista.person'])
            ->join('motoristas', 'checklist_out.motorista_id', '=', 'motoristas.id')->join('people', 'motoristas.person_id', '=', 'people.id')
            ->whereDate('checklist_out.created_at', '>=', Carbon::today()->subDays( 21 ))
            ->where('viatura_id', $viatura->id)
            ->orWhere('checklist_out.created_at', 'like', '%' . $request->q . '%' )
            ->orWhere('people.nome_completo', 'like', '%' . $request->q . '%' )
            ->orderBy('checklist_out.created_at', 'desc')->paginate(15);
        }else if($request->perPage){
            return $this->checkListOut->with(['viatura', 'motorista.person'])
            ->whereDate('checklist_out.created_at', '>=', Carbon::today()->subDays( 21 ))
            ->orderBy('checklist_out.created_at', 'desc')->paginate($request->perPage);
        }else{
            return $this->checkListOut->with(['viatura', 'motorista.person'])
            ->whereDate('checklist_out.created_at', '>=', Carbon::today()->subDays( 21 ))
            ->orderBy('checklist_out.created_at', 'desc')->paginate(15);
        }

    }

    public function RelatorioSemanal(Request $request, $id){
        $viatura = Viatura::where('id', $id)->first();

        $checkListOut = CheckListOut::with(['checklists.checklist_vars'])->where('viatura_id', $viatura->id)->select('id', 'km_inicio', 'hr_inicio', DB::raw("(DATE_FORMAT(created_at, '%W')) as dia"))->where('created_at', '>=', Carbon::now()->subDays(7))->get()->groupBy('dia');
        $categoria = Categoria::all();



       return view('reportMail.relatorio_checklistOut', compact('viatura', 'checkListOut', 'categoria'));

        return response()->json([$checkListOut, $categoria], 200);
    }

   function listViaturaDentro(){
       return Viatura::where('viaturas.locate', 'IN')->where('viaturas.estado', true)->get();
   }

=======
    public function index()
    {
        return $this->checkListOut->with(['viatura', 'motorista.person', 'checkListIn'])->orderBy('id', 'desc')->paginate(10);
    }

   function listViaturaDentro(){
       return Viatura::where('locate', 'IN')->where('estado', true)->get();
   }
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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
<<<<<<< HEAD

   function storeChecklistVars(Request $request){
        $checklistVars = new checklist_vars();
        $email_roles = new checkListRole();

        $this->validate($request, [
            'checklist_name'=>'required|unique:checklist_vars,checklist_name,except,id',
            'categoria'=>'required',
            'email_forward'=>'required'
        ]);

        try {
            // $categoria = new Categoria();

            $categoria = Categoria::firstOrCreate(
                ['nome_categoria'=>$request->categoria],
                ['createdBy'=>auth()->user()->id]);

        $checklistVars->checklist_name = $request->checklist_name;
        $checklistVars->categoria = $categoria->id;
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

=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    public function store(Request $request)
    {
        $this->validate($request, [
            // 'tipo_saida'=>'required',
            'viatura_id'=>'required|integer|exists:viaturas,id',
            'motorista_id'=>'required|integer|exists:motoristas,id',
            'km_inicio'=>'required|numeric|min:0',
            'hora_inicio'=>'required',
<<<<<<< HEAD
        ], [
            'required'=>'O :attribute é obrigatório'
        ]);

=======
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
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
        $viatura = Viatura::where('id', $request->viatura_id)->first();

        if ($viatura->kilometragem > $request->km_inicio) {
            return response()->json(['error'=>'kilometragem registada é menor que a kilometragem actual da viatura, Kilometragem actual: '.$viatura->kilometragem], 421);
        }

        if($viatura->estado == false || $viatura->locate == 'OUT'){
<<<<<<< HEAD
            return response()->json(['error' => 'A viatura desejada se encontra fora do parque!'], 404);
=======
            return response()->json(['error' => 'A viatura desejada não se encontra fora do parque!'], 404);
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
        }

        $motorista = motorista::where('id', $request->motorista_id)->first();

        if(empty($motorista)){
            return response()->json(['error' => 'O motorista não foi encontrado!'], 404);
        }

<<<<<<< HEAD
        $checkListOut = new CheckListOut();

        $checkListOut->viatura()->associate($request->viatura_id);
        $checkListOut->motorista()->associate($request->motorista_id);
        $checkListOut->km_inicio = $request->km_inicio;
        $checkListOut->hr_inicio = $request->hora_inicio;
        $checkListOut->estado = $request->tipo_saida;
=======




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
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
        $checkListOut->user_id = auth()->user()->id;
        $checkListOut->save();

        if($checkListOut){

<<<<<<< HEAD
            // return $request->checklist_var;
            $checklists = array();

            foreach ($request->checklist_var as $key => $var) {

                $checklistVars[$key] = checklist_vars::where('id', $var['id'])->get();
                foreach ($checklistVars[$key] as $key => $value) {
                    // return $value['id'];
                  $checklists[] = [
                        'checklist_vars_id'=>$value['id'],
                        'opcao'=>$var['opcao'],
                        'check_list_out_id'=>$checkListOut->id,
                        'created_at'=>Carbon::now(),
                        'updated_at'=>Carbon::now()
                       ];
                }
               }

               checklists::insert($checklists);

               $checkList = checklists::where('check_list_out_id', $checkListOut->id)->where('opcao','!=', 'Ok')->get();

               $ocorrencia = [];
               foreach($checkList as $chkOc){
               $ocorrencia[] = [
                    'descricao'=>checklist_vars::where('id', $chkOc->checklist_vars_id)->pluck('checklist_name'),
                    'situacao'=>$chkOc->opcao,
                    'checklists_id'=>$chkOc->id,
                    'created_at'=>Carbon::now(),
                ];
            }
              $ocorrencia_checlist = ocorrencia_checklist::insert($ocorrencia);
               $viatura->locate = 'OUT';
               $viatura->update();



            //    $pdf = PDF::loadView('reportMail.ocorrencia_check', compact('checkList'))->setOptions(['defaultFont' => 'sans-serif']);
            //     $path = Storage::put('public/checklist_pdf/checkList' . $checkListOut->id . '.pdf', $pdf->output());

            return response()->json(['message'=>'viatura inspencionada com sucesso']);
        }else{
            return response()->json(['erro'=>'Ocorreu erro de insercao de dados']);
        }

    }


    public function show($id)
    {
        $checkListOut = $this->checkListOut->with(['viatura', 'motorista'])->where('id', $id)->first();

         $chklst = checklists::with('ocorrencia_checklist')->join('checklist_vars', 'checklist_vars.id', '=', 'checklists.checklist_vars_id')->where('checklists.check_list_out_id', $id)->select('checklist_vars.categoria', 'checklist_vars.checklist_name', 'checklists.opcao', DB::raw('checklist_vars.categoria as categoria'))
        ->orderBy('checklist_vars.categoria', 'asc')
        ->get();

        $categoria = Categoria::with('checklist_vars.checklists')->get();

        $dados[] = [
            'checklistOut'=>$checkListOut,
            'checklists'=>$chklst,
            'categoria'=>$categoria
        ];

        return response()->json($dados, 200);
    }

// Verificacao instantanea para saida das viaturas;

    public function InstantCheckout(Request $request){
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
        $checkListOut->hr_inicio = $request->hora_inicio;
        $checkListOut->estado = $request->tipo_saida;
        $checkListOut->user_id = auth()->user()->id;
        $checkListOut->save();

        if($request->litros_tanque > 0){
            $viatura->qtd_disponivel = $request->litros_tanque;
        }
        $viatura->kilometragem = $request->km_inicio;
        $viatura->locate = 'OUT';
        $viatura->update();

        return response()->json(['message'=>'viatura inspencionada com sucesso']);
    }
=======
            if ($checkListOut->tipo_saida === 'OUTROS') {
                $checkListOut->checklistOutDestination()->create([
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
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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
