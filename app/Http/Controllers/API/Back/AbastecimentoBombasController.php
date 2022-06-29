<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\abastecimento_bomba;
use App\Models\Bombas;
use App\Models\combustivelBomba;
use App\Models\Ordem;
use App\Models\responsavelBombas;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
class AbastecimentoBombasController extends Controller
{
   private $abastecimento_bomba;

   function __construct(abastecimento_bomba $abastecimento_bomba)
   {
    $this->abastecimento_bomba = $abastecimento_bomba;
   }
    public function index()
    {
        $abastecimento_bomba = $this->abastecimento_bomba->with(['bombas', 'user', 'ordem'])->where('estado', 'recebido')->orderBy('id', 'asc')->paginate(10);

        return response()->json($abastecimento_bomba, 200);
    }

    function abastecimentoPendente($id){
        $abastecimento = $this->abastecimento_bomba->with(['bombas', 'user', 'ordem'])->where('bombas_id', $id)->get();
        $pendentes = array();
        foreach ($abastecimento as $key => $abst) {
            if($abst->estado === 'pendente'){
                $pendentes[$key] = $abst;
            }
        }

        return $pendentes;
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'bombas_id'=>'required|integer|exists:bombas,id',
            'preco_combustivel'=>'required|numeric|min:1',
            'qtd_abastecida'=>'required|numeric'
        ]);
        $image = File::get(url('public/images/pfuxelalogo.png'));
        $ordem = new Ordem();
        try {
            $counter = 10000;
            $uuid = Str::uuid()->toString();

            $last_order = Ordem::latest()->first();
            if (!empty($last_order)) {
                $new_code = ($last_order->codigo_ordem + 1);
                $ordem->codigo_ordem = $new_code;
            } else {
                $ordem->codigo_ordem = $counter;
            }
            $ordem->refs = $uuid;
            $ordem->bombas_id = $request->bomba_id;
            $ordem->estado = 'Autorizada';
            $ordem->tipo_ordem = 'abastecimento_interno';
            $ordem->createdBy = auth()->user()->id;
            $ordem->save();

        $bombas = Bombas::where('id', $request->bombas_id)->first();

        $emails = responsavelBombas::where('bombas_id', $bombas->id)->get();

        $abastecimento_bomba = new abastecimento_bomba();

        $preco = ($request->preco_combustivel * $request->qtd_abastecida);
        $iva = ((17*$preco)/100);

        $abastecimento_bomba->tipo_de_combustivel = $request->tipo_de_combustivel;
        $abastecimento_bomba->estado = 'pendente';
        $abastecimento_bomba->qtd_abastecida = $request->qtd_abastecida;
        $abastecimento_bomba->preco_combustivel = $request->preco_combustivel;
        $abastecimento_bomba->bombas_id = $bombas->id;
        $abastecimento_bomba->ordem_id = $ordem->id;
        $abastecimento_bomba->user_id = auth()->user()->id;
        $abastecimento_bomba->iva_amount = $iva;
        $abastecimento_bomba->save();

        return response()->json(['success' => 'Requisicao de abastecimento da bomba feita com Sucesso', 'erro' => false], 200);
    } catch (\Exception $e) {
        return response()->json(['error' => 'erro no pedido de abastecimento '.$e->getMessage(), 'erro' => true], 421);
    }

    }

    public function show($id)
    {
        $abastecimento_bomba = $this->abastecimento_bomba->with(['bombas', 'user', 'ordem'])->findOrFail($id);

        return response()->json($abastecimento_bomba, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\abastecimento_bomba  $abastecimento_bomba
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, abastecimento_bomba $abastecimento_bomba)
    {
        $abastecimento = abastecimento_bomba::findOrFail($abastecimento_bomba);

        // $abastecimento->
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\abastecimento_bomba  $abastecimento_bomba
     * @return \Illuminate\Http\Response
     */
    public function destroy(abastecimento_bomba $abastecimento_bomba)
    {
        //
    }
}
