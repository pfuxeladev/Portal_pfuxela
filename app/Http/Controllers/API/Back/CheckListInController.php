<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\checklist_vars;
use App\Models\checkListIn;
use App\Models\CheckListOut;
use App\Models\CheckListRota;
use App\Models\checklists;
use App\Models\incidente;
use App\Models\ocorrencia_checklist;
use App\Models\Viatura;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;
use Intervention\Image\Exception\NotReadableException;
use Illuminate\Support\Facades\DB;
class CheckListInController extends Controller
{
    private $checkListIn;

    function __construct(CheckListIn $checkListIn)
    {
        $this->checkListIn = $checkListIn;
    }
    public function index()
    {
        return $this->checkListIn->with(['viatura', 'motorista', 'user', 'CheckListOut.viatura'])->orderBy(request('sortBy'), 'ASC')->paginate(request('perPage'));
    }

  function listViaturaFora(){
      return Viatura::join('checklist_out', 'checklist_out.viatura_id', '=', 'viaturas.id')->where('viaturas.locate', 'OUT')->get();
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
        // try {
            $checkList_out = CheckListOut::where('viatura_id', $request->viatura_id)->first();

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
            $checkListIn->save();

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

            if($checkListIn){

                // return $request->checklist_var;
                $checklists = array();

                foreach ($request->checklist_var as $key => $var) {
                    // $checklists[$key] = $var["opcao"];

                    $checklistVars[$key] = checklist_vars::where('id', $var['id'])->get();
                    if(isset($var['opcao']) == true){
                        foreach ($checklistVars[$key] as $key => $value) {

                            $datas[$key] = DB::table('checklists')->where('check_list_out_id', $checkList_out->id)->update([
                                'checklist_vars_id'=>$value->id,
                                'opcao_entrada'=>1,
                                'check_list_in_id'=>$checkListIn->id
                               ]);
                        }

                    }else {
                        foreach ($checklistVars[$key] as $key => $value) {

                            $datas[$key] = DB::table('checklists')->where('check_list_out_id', $checkList_out->id)->update([
                                'checklist_vars_id'=>$value->id,
                                'opcao_entrada'=>false,
                                'check_list_in_id'=>$checkListIn->id
                               ]);
                        }
                    }
                   }

                //    return $checklists;

                   $checkList = DB::table('checklists')->where('check_list_in_id', $checkListIn->id)->where('opcao','!=', 1)->get();

                   $ocorrencia = [];
                   foreach($checkList as $chkOc){
                   $ocorrencia[] = [
                        'descricao'=>checklist_vars::where('id', $chkOc->checklist_vars_id)->pluck('checklist_name'),
                        'situacao_entrada'=>$chkOc->opcao,
                        'checklists_id'=>$chkOc->id
                    ];
                }
                   ocorrencia_checklist::insert($ocorrencia);


                if($request->viatura_id !=null){
                    $viatura = Viatura::where('id', $request->viatura_id)->first();
                     $viatura->locate = 'IN';
                     $viatura->update();
                }



                $delta_percorrido = $request->km_fim - $viatura1->kilometragem;

             $consumo = $delta_percorrido * $viatura1->capacidade_media;

                if($viatura1->qtd_disponinvel > $consumo){
                    $qtd_disponivel = ($viatura1->qtd_disponivel - $consumo);
                }else{
                    $qtd_disponivel = ($consumo - $viatura1->qtd_disponivel);
                }
                // return $viatura1->qtd_disponivel;
                if($qtd_disponivel < 0){
                    $viatura1->qtd_disponivel = 0;
                }else{
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

   public function InstantCheckIn(Request $request){
    $this->validate($request, [
        'km_fim'=>'required|numeric|min:0',
        'hr_fim'=>'required',
    ]);
    // try {
        $checkList_out = CheckListOut::where('id', $request->id)->first();

        // return $checkList_out;

        $viatura1 = Viatura::where('id', $checkList_out->viatura_id)->first();


        if($viatura1->kilometragem > $request->km_fim){
            return response()->json(['Erro'=> 'A leitura actual nao deve sem menor que '.$viatura1->kilometragem.' anterior da viatura'], 421);
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
        $checkListIn->save();

        if($request->viatura_id !=null){
            $viatura = Viatura::where('id', $request->viatura_id)->first();
             $viatura->locate = 'IN';
             $viatura->update();
        }


        $delta_percorrido = $request->km_fim - $viatura1->kilometragem;

        $consumo = $delta_percorrido * $viatura1->capacidade_media;

        if($viatura1->qtd_disponinvel > $consumo){
            $qtd_disponivel = ($viatura1->qtd_disponivel - $consumo);
        }else{
            $qtd_disponivel = ($consumo - $viatura1->qtd_disponivel);
        }
        // return $viatura1->qtd_disponivel;
        if($qtd_disponivel < 0){
            $viatura1->qtd_disponivel = 0;
        }else{
            $viatura1->qtd_disponivel = $qtd_disponivel;
        }
        $viatura1->kilometragem = $request->km_fim;
        $viatura1->locate = 'IN';
        $viatura1->update();

       return response()->json(['message'=>'Viatura deu entrada com sucesso'], 200);

   }
    public function show($id)
    {
        return $this->checkListIn->with(['CheckListOut.viatura', 'checklist'])->findOrFail($id);
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
