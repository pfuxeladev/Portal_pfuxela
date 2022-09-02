<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
<<<<<<< HEAD
use App\Models\checklist_vars;
use App\Models\checkListIn;
use App\Models\CheckListOut;
use App\Models\CheckListRota;
use App\Models\checklists;
use App\Models\incidente;
use App\Models\ocorrencia_checklist;
use App\Models\Viatura;
use Carbon\Carbon;
=======
use App\Models\CheckListIn;
use App\Models\CheckListOut;
use App\Models\CheckListRota;
use App\Models\incidente;
use App\Models\Viatura;
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;
use Intervention\Image\Exception\NotReadableException;
<<<<<<< HEAD
use Illuminate\Support\Facades\DB;
use App\Models\Categoria;
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
class CheckListInController extends Controller
{
    private $checkListIn;

    function __construct(CheckListIn $checkListIn)
    {
        $this->checkListIn = $checkListIn;
    }
<<<<<<< HEAD
    public function index(Request $request)
    {
        if ($request->q) {
            return $this->checkListIn->with(['viatura', 'motorista', 'user', 'CheckListOut.viatura'])->where('created_at', 'like', '%'.$request->q.'%')->orderBy('created_at', 'desc')->paginate(10);
        } else if($request->q && $request->perPage) {
            return $this->checkListIn->with(['viatura', 'motorista', 'user', 'CheckListOut.viatura'])->where('created_at', 'like', '%'.$request->q.'%')->orderBy('created_at', 'desc')->paginate($request->perPage);
        }else{
            return $this->checkListIn->with(['viatura', 'motorista', 'user', 'CheckListOut.viatura'])->orderBy('created_at', 'desc')->paginate(10);
        }


    }

  function listViaturaFora(){
      return Viatura::join('checklist_out', 'checklist_out.viatura_id', '=', 'viaturas.id')->where('viaturas.locate', 'OUT')->get();
=======
    public function index()
    {
        return $this->checkListIn->with(['viatura', 'motorista', 'user'])->join('checklist_out', 'checklist_in.check_list_out_id', '=', 'checklist_out.id')->paginate(10);
    }

  function listViaturaFora(){
      return Viatura::join('checklist_out', 'checklist_out.viatura_id', '=', 'viaturas.id')->where('viaturas.locate', 'OUT')->where('viaturas.id', '!=', 'checklist_out.viatura_id')->get();
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
  }
  function listaIncedentes(){
      return incidente::all();
  }

    public function store(Request $request)
    {
        // return $request->all();

        $this->validate($request, [
            'km_fim'=>'required|numeric|min:0',
            'hr_fim'=>'required',
        ]);
<<<<<<< HEAD
        // try {
            $checkList_out = CheckListOut::where('id', $request->viatura_id)->first();

            // return $checkList_out;

            $viatura1 = Viatura::where('id', $checkList_out->viatura_id)->first();


            if($viatura1->kilometragem > $request->km_fim){
                return response()->json(['Erro'=> 'A leitura actual nao deve sem menor que a kilometragem anterior da viatura'], 421);
            }

            // return $request->checklist_var;
            $checkListIn = new checkListIn();
            $checkListIn->check_list_out_id = $checkList_out->id;
            if ($request->motorista_id != null) {
                $checkListIn->motorista()->associate($request->motorista_id);
            }
            $checkListIn->viatura_id = $viatura1->id;
            $checkListIn->km_fim = $request->km_fim;
            $checkListIn->hr_fim = $request->hr_fim;
            $checkListIn->estado = 'ENTRADA';
            $checkListIn->chefe_operacao = $request->chefe_operacao;
            $checkListIn->user_id = auth()->user()->id;

=======
        try {
            $checkList_out = CheckListOut::where('id', $request->check_list_out_id)->first();
            // return $checkList_out;
            $checkListIn = new CheckListIn();
            $checkListIn->check_list_out_id = $checkList_out->id;
            $checkListIn->motorista()->associate($request->motorista_id);
            $checkListIn->km_fim = $request->km_fim;
            $checkListIn->hr_fim = $request->hr_fim;
            $checkListIn->carta_conducao = $request->carta_conducao;
            $checkListIn->teste_alcool = $request->teste_alcool;
            $checkListIn->uniforme = $request->uniforme;
            $checkListIn->motorista_dss = $request->motorista_dss;
            $checkListIn->lista_presenca = $request->lista_presenca;
            $checkListIn->colete_entrada = $request->colete_entrada;
            $checkListIn->triangulo_entrada = $request->triangulo_entrada;
            $checkListIn->chave_roda_entrada = $request->chave_roda_entrada;
            $checkListIn->kit_reboque_entrada = $request->kit_reboque_entrada;
            $checkListIn->kit_1_socorros_entrada = $request->kit_1_socorro_entrada;
            $checkListIn->pneu_sobr_entrada = $request->pneu_sobr_entrada;
            $checkListIn->macaco_entrada = $request->macaco_entrada;
            $checkListIn->extintor_entrada = $request->extintor_entrada;
            $checkListIn->livrete_entrada = $request->livrete_entrada;
            $checkListIn->licenca_entrada = $request->licenca_entrada;
            $checkListIn->seguros_entrada = $request->seguros_entrada;
            $checkListIn->inspencao_entrada = $request->inspencao_entrada;
            $checkListIn->taxaradio_entrada = $request->taxaradio_entrada;
            $checkListIn->user_id = auth()->user()->id;
            if ($request->is_incidente == true) {
                $checkListIn->is_incidente = $request->is_incidente;
                $checkListIn->incidente()->associate($request->incidente_id);
            }
            $checkListIn->relatorio_geral = $request->relatorio_geral;
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

            if ($request->anexos != null) {

                $images = $request->anexos;

                $filename = time() . '.' . explode('/', explode(':', substr($images, 0, strpos($images, ';')))[1])[1];
                Storage::disk('local')->putFileAs(
                    'checklistIn/'.$filename,
                    $images,
                    $filename
                  );

                $checkListIn->anexos = $filename;
            }
<<<<<<< HEAD
            $checkListIn->save();

            if($checkListIn){

                // return $request->checklist_var;

                foreach ($request->checklist_var as $key => $var) {

                    $checklistVars[$key] = checklist_vars::where('id', $var['id'])->get();
                    // $checklists = checklists::where('checklist_vars_id', $var['id'])->first();
                    foreach ($checklistVars[$key] as $key => $value) {
                        // return $value['id'];
                      checklists::where('checklist_vars_id',$value['id'])->update(['opcao_entrada'=>$var['opcao'], 'check_list_in_id'=>$checkListIn->id]);
                    }
                   }



                   $checkList = DB::table('checklists')->where('check_list_in_id', $checkListIn->id)->where('opcao','!=', 'Ok')->get();

                   $ocorrencia = [];
                   foreach($checkList as $chkOc){
                   $ocorrencia[] = [
                        'descricao'=>checklist_vars::where('id', $chkOc->checklist_vars_id)->pluck('checklist_name'),
                        'situacao_entrada'=>$chkOc->opcao,
                        'checklists_id'=>$chkOc->id,
                        'created_at'=>Carbon::now()
                    ];
                }
                   ocorrencia_checklist::insert($ocorrencia);

            $delta_percorrido = $request->km_fim - $viatura1->kilometragem;

             $consumo = $delta_percorrido * $viatura1->capacidade_media;

             $delta_percorrido = $request->km_fim - $viatura1->kilometragem;
             $qtd_disponivel = ($viatura1->qtd_disponivel - $consumo);
             if($viatura1->qtd_disponinvel > $consumo){

                 $qtd_disponivel = ($viatura1->qtd_disponivel - $consumo);

                 $viatura1->qtd_disponivel = $qtd_disponivel;

             }else if($viatura1->capacidade_tanque < $consumo){

                 $viatura1->qtd_disponivel = $request->litros_tanque;
             }else{
                 $qtd_disponivel = ($consumo - $viatura1->qtd_disponivel);
             }
             // return $viatura1->qtd_disponivel;
             if($qtd_disponivel < 0){
                 $viatura1->qtd_disponivel = $request->litros_tanque;
             }else if($qtd_disponivel >=0 && $viatura1->capacidade_tanque > $qtd_disponivel) {
                 $viatura1->qtd_disponivel = $qtd_disponivel;
             }
                $viatura1->kilometragem = $request->km_fim;
                $viatura1->locate = 'IN';
                $viatura1->update();

               return response()->json(['message'=>'Viatura deu entrada com sucesso'], 200);
            }
        // } catch (\Exception $e) {
        //     return response()->json(['erro'=>'Ocorreu um erro de insercao', $e->getMessage()], 421);
        // }

    }


   // Verificacao instantaneo da entrada de viatura no parque

//    public function InstantCheckIn(Request $request){
//     $this->validate($request, [
//         'km_fim'=>'required|numeric|min:0',
//         'hr_fim'=>'required',
//     ]);
//     // try {
//         $checkList_out = CheckListOut::where('id', $request->viatura_id)->first();

//         // return $checkList_out;

//         $viatura1 = Viatura::where('id', $checkList_out->viatura_id)->first();


//         if($viatura1->kilometragem > $request->km_fim){
//             return response()->json(['Erro'=> 'A leitura actual nao deve sem menor que '.$viatura1->kilometragem.' anterior da viatura'], 421);
//         }

//         // return $request->checklist_var;
//         $checkListIn = new checkListIn();
//         $checkListIn->check_list_out_id = $checkList_out->id;
//         if ($request->motorista_id != null) {
//             $checkListIn->motorista()->associate($request->motorista_id);
//         }
//         $checkListIn->viatura_id = $viatura1->id;
//         $checkListIn->km_fim = $request->km_fim;
//         $checkListIn->hr_fim = $request->hr_fim;
//         $checkListIn->estado = 'ENTRADA';
//         $checkListIn->chefe_operacao = $request->chefe_operacao;
//         $checkListIn->user_id = auth()->user()->id;
//         $checkListIn->save();

//         if($request->viatura_id !=null){
//             $viatura = Viatura::where('id', $checkList_out->viatura_id)->first();
//              $viatura->locate = 'IN';
//              $viatura->update();
//         }


//         $delta_percorrido = $request->km_fim - $viatura1->kilometragem;

//         $consumo = $delta_percorrido * $viatura1->capacidade_media;

//         if($viatura1->qtd_disponinvel > $consumo){
//             $qtd_disponivel = ($viatura1->qtd_disponivel - $consumo);
//         }else if($viatura1->capacidade_tanque < $consumo){
//             $viatura1->qtd_disponivel = $request->litros_tanque;
//         }else{
//             $qtd_disponivel = ($consumo - $viatura1->qtd_disponivel);
//         }
//         // return $viatura1->qtd_disponivel;
//         if($qtd_disponivel < 0){
//             $viatura1->qtd_disponivel = 0;
//         }else{
//             $viatura1->qtd_disponivel = $request->litros_tanque;
//         }
//         $viatura1->kilometragem = $request->km_fim;
//         $viatura1->locate = 'IN';
//         $viatura1->update();

//        return response()->json(['message'=>'Viatura deu entrada com sucesso'], 200);

//    }
    public function show($id)
    {
        $checkListIn =  $this->checkListIn->with(['CheckListOut.viatura', 'checklist'])->findOrFail($id);

        $chklst = checklists::with(['ocorrencia_checklist'])->join('checklist_vars', 'checklist_vars.id', '=', 'checklists.checklist_vars_id')->where('checklists.check_list_in_id', $id)->select('checklist_vars.categoria', 'checklist_vars.checklist_name', 'checklists.opcao_entrada', DB::raw('checklist_vars.categoria as categoria'))
        ->orderBy('checklist_vars.categoria', 'asc')
        ->get();

        $categoria = Categoria::with('checklist_vars.checklists')->get();

        $dados[] = [
            'checklistIn'=>$checkListIn,
            'checklists'=>$chklst,
            'categoria'=>$categoria
        ];

       return response()->json($dados, 200);
=======

            $checkListIn->save();
            if($checkListIn){
                $viatura = Viatura::where('id', $request->viatura_id)->first();
                $viatura1 = Viatura::where('id', $checkList_out->viatura_id)->first();

                $delta_percorrido = ($request->km_fim - $viatura1->kilometragem);

                $combustivel = ($viatura->capacidade_media * $delta_percorrido);

                $total_percorrido = ($request->km_fim + $viatura1->kilometragem);

                $qtd_disponivel = ($viatura1->qtd_disponivel - $combustivel);
                $viatura->locate = 'IN';
                $viatura->update();

                $viatura1->qtd_disponivel = $qtd_disponivel;
                $viatura1->kilometragem = $total_percorrido;
                $viatura1->locate = 'IN';
                $viatura1->update();

               return response()->json(['message'=>'Viatura inspencionada com sucesso']);
            }
        } catch (\Exception $e) {
            return response()->json(['erro'=>'Ocorreu um erro de insercao', $e->getMessage()]);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CheckListIn  $checkListIn
     * @return \Illuminate\Http\Response
     */
    public function show(CheckListIn $checkListIn)
    {
        //
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CheckListIn  $checkListIn
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CheckListIn $checkListIn)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CheckListIn  $checkListIn
     * @return \Illuminate\Http\Response
     */
    public function destroy(CheckListIn $checkListIn)
    {
        //
    }
}
