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
use Barryvdh\DomPDF\PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Carbon;
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
        // $image = File::get(url('public/images/pfuxelalogo.png'));
        $ordem = new Ordem();

        $bombas = Bombas::where('id', $request->fornecedor_id)->first();

        $bombas_verify = abastecimento_bomba::whereDate('created_at', Carbon::today())->where('fornecedor', $bombas->nome_bombas)->where('qtd_abastecida',$request->qtd_abastecida)->first();
        if($bombas_verify){
            return response()->json(['error'=>'Nao pode abastecer duas vezes a bomba no mesmo dia']);
        }

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



        $emails = responsavelBombas::where('bombas_id', $bombas->id)->first();

        $abastecimento_bomba = new abastecimento_bomba();

        $preco = ($request->preco_combustivel * $request->qtd_abastecida);
        $iva = ((17*$preco)/100);

        $abastecimento_bomba->tipo_de_combustivel = $request->tipo_de_combustivel;
        $abastecimento_bomba->estado = 'pendente';
        $abastecimento_bomba->qtd_abastecida = $request->qtd_abastecida;
        $abastecimento_bomba->preco_combustivel = $request->preco_combustivel;
        $abastecimento_bomba->bombas_id = $request->bombas_id;
        $abastecimento_bomba->fornecedor = $bombas->nome_bombas;
        $abastecimento_bomba->fornecedor_contacto = $emails->email_bomba;
        $abastecimento_bomba->ordem_id = $ordem->id;
        $abastecimento_bomba->user_id = auth()->user()->id;
        $abastecimento_bomba->iva_amount = $iva;
        $abastecimento_bomba->sub_total = $preco;
        $abastecimento_bomba->save();

        $abastecimento_bomba::with(['bombas', 'user', 'ordem'])->where('bombas_id', $bombas->id)->latest()->first();

        $data["email"] = $emails->email_bomba;
        $data["title"] = "info@pfuxela.co.mz";
        $data["body"] = "Ordem de abastecimento nr ".$ordem->codigo_ordem;

         $pdf = PDF::loadView('orderMail.ExtraOrder', compact('abastecimento_bomba'))->setOptions(['defaultFont' => 'sans-serif']);
         $path = Storage::put('public/pdf/Abastecimento_bomba.pdf', $pdf->output());

        Mail::send('orderMail.ExtraOrder', compact('abastecimento_bomba'), function($message)use($data, $pdf) {
            $message->to($data["email"])
                    ->subject($data["title"])
                    ->attachData($pdf->output(), "Ordem_bomba".date('Y-m-d H:i:s') .".pdf");
        });
        return response()->json(['success' => 'Requisicao de abastecimento da bomba feita com Sucesso', 'erro' => false], 200);
    } catch (\Exception $e) {
        return response()->json(['error' => 'erro no pedido de abastecimento '.$e->getMessage(), 'erro' => true], 421);
    }

    }

    public function show($id)
    {
        $abastecimento_bomba = $this->abastecimento_bomba->with(['bombas', 'user', 'ordem'])->findOrFail($id);
        // $pdf = PDF::loadView('orderMail.ExtraOrder', compact('abastecimento_bomba'))->setOptions(['defaultFont' => 'Verdana']);
        // return $pdf->download('ordem.pdf');
        // return response()->json($abastecimento_bomba, 200);
        return view('orderMail.ExtraOrder', compact('abastecimento_bomba'));
    }

    public function printAbast(Request $request, $id)
    {
        $abastecimento_bomba = abastecimento_bomba::with(['bombas', 'user', 'ordem'])->where('bombas_id', $id)->first();
        $pdf = PDF::loadView('orderMail.ExtraOrder', compact('abastecimento_bomba'))->setOptions(['defaultFont' => 'Verdana']);
        return $pdf->download('ordem.pdf');
        // return response()->json($abastecimento_bomba, 200);

        // return view('orderMail.ExtraOrder', compact('abastecimento_bomba'));
    }


    public function update(Request $request, $id)
    {

        $abastecimento = abastecimento_bomba::findOrFail($id);

        $abastecimento->nome_motorista = $request->nome_motorista;
        $abastecimento->data_recepcao = $request->data_recepcao;
        $abastecimento->identificacao = $request->identificacao;
        $abastecimento->selo_abastecimento = $request->selo_abastecimento;
        $abastecimento->viatura_fornecedora = $request->viatura_fornecedora;
        $abastecimento->observacao = $request->observacao;
        $abastecimento->estado = 'recebido';
        $abastecimento->user_id = auth()->user()->id;
        $abastecimento->update();

        $bombas = Bombas::where('id', $request->bombas_id)->first();
        $bombas->qtd_disponivel = ($bombas->qtd_disponivel + $abastecimento->qtd_abastecida);
        $bombas->createdBy = auth()->user()->id;
        $bombas->update();





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
