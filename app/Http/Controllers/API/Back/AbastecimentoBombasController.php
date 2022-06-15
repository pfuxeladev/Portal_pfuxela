<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\abastecimento_bomba;
use App\Models\Bombas;
use App\Models\combustivelBomba;
use App\Models\Ordem;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class AbastecimentoBombasController extends Controller
{
   private $abastecimento_bomba;

   function __construct(abastecimento_bomba $abastecimento_bomba)
   {
    $this->abastecimento_bomba = $abastecimento_bomba;
   }
    public function index()
    {
        $abastecimento_bomba = $this->abastecimento_bomba->with(['bombas', 'user', 'ordem'])->orderBy('id', 'asc')->paginate(10);

        return response()->json($abastecimento_bomba, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'bombas_id'=>'required|integer|exists:bombbas,id',
            'preco_de_combustivel'=>'required|numeric|min:1',
            'qtd_abastecida'=>'required|numeric'
        ]);

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
            $ordem->createdBy = auth()->user()->id;
            $ordem->save();

        $bombas = Bombas::where('id', $request->bombas_id)->first();

        $abastecimento_bomba = new abastecimento_bomba();

        $preco = ($request->preco_combustivel * $request->qtd_abastecida);
        $iva = ((17*$preco)/100);

        $abastecimento_bomba->tipo_de_combustivel = $request->tipo_de_combustivel;
        $abastecimento_bomba->qtd_abastecida = $request->qtd_abastecida;
        $abastecimento_bomba->preco_combustivel = $request->preco_combustivel;
        $abastecimento_bomba->bombas_id = $bombas->id;
        $abastecimento_bomba->ordem_id = $ordem->id;
        $abastecimento_bomba->user_id = auth()->user()->id;
        $abastecimento_bomba->iva_amount = $iva;
        $abastecimento_bomba->save();

        return response()->json(['success' => 'Cadastrado com Sucesso', 'erro' => false], 200);
    } catch (\Exception $e) {
        return response()->json(['error' => 'erro no pedido de abastecimento', 'erro' => true], 421);
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
        //
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
