<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\CheckListIn;
use App\Models\CheckListOut;
use App\Models\CheckListRota;
use App\Models\incidente;
use App\Models\Viatura;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;
use Intervention\Image\Exception\NotReadableException;
class CheckListInController extends Controller
{
    private $checkListIn;

    function __construct(CheckListIn $checkListIn)
    {
        $this->checkListIn = $checkListIn;
    }
    public function index()
    {
        return $this->checkListIn->with(['viatura', 'motorista', 'user'])->join('checklist_out', 'checklist_in.check_list_out_id', '=', 'checklist_out.id')->paginate(10);
    }

  function listViaturaFora(){
      return Viatura::join('checklist_out', 'checklist_out.viatura_id', '=', 'viaturas.id')->where('viaturas.locate', 'OUT')->where('viaturas.id', '!=', 'checklist_out.viatura_id')->get();
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
