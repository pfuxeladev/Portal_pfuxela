<?php

namespace App\Http\Controllers\API\BACK;

use App\Http\Controllers\Controller;
use App\Models\Abastecimento;
use Illuminate\Http\Request;
use App\Models\Ordem;
use App\Models\Viatura;
use App\Models\Abastecimento_rota;
use App\Models\Rota;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class AbastecimentoController extends Controller
{
    private $ordem;
    private $abastecimento;

    function __construct(Abastecimento $abastecimento, Ordem $ordem)
    {
        $this->abastecimento = $abastecimento;
        $this->ordem = $ordem;
    }
    public function index()
    {
        $abastecimento = $this->abastecimento->with(['ordem.bombas', 'viatura'])->orderBy('id', 'asc')->paginate(15);

        return $abastecimento;
    }

    function ListarViaturas()
    {
        return Viatura::where('locate','IN')->get();
    }

    function RotaByProject(Request $request){
        return Rota::where('projecto_id', $request->projecto_id)->get();
    }

    function getQtdDisponivel(Request $request)
    {
        $qtdDisponivel = 0;


        $capTanque = Viatura::where('id', $request->viatura_id)->first();
        $qtdRec = Abastecimento::where('viatura_id', $request->viatura_id)->select('qtd_rec')->orderBy('id', 'desc')->first();
        if ($qtdRec) {
            $qtdDisponivel =  $capTanque->qtd_disponivel;

            if (!empty($qtdDisponivel)) {
                return $qtdDisponivel;
            } else {

            }
        }
        return 0;

    }
    public function store(Request $request)
    {
        $totalAbastecer = 0;
        $this->validate($request, [
            'viatura_id' => 'required|integer|exists:viaturas,id',
            'bombas_id' => 'required|integer|exists:bombas,id',
            'projecto_id' => 'required|integer',
            'abastecer' => 'required|array|min:1',
            'abastecer.*.rota_id' => 'required|integer|exists:rotas,id',
            'abastecer.*.qtd_abastecer' => 'required|numeric|min:0',
            'abastecer.*.turno' => 'required|string|max:255',
        ],[
            'required' => ' o campo :attribute e obrigat&oacute;rio', 'integer' => 'O :attribute deve ser um numero inteiro', 'before_or_equal' => 'O campo :attribute deve ser uma data ou anos antes da data actual', 'numeric'=> 'O campo :attribute deve ser valor numerico'
        ]);

        $viatura = Viatura::where('id', $request->viatura_id)->first();
        if ($viatura->qtd_disponivel > 0 && $viatura->locate == 'IN') {
            return response()->json(['erro'=>'essa viatura ja foi abastecida e ainda nao saiu do parque', 'err'=>true]);
        }else if($viatura->$viatura == 'OUT'){
            return response()->json(['erro'=>'essa viatura ja foi abastecida e est&aacute; fora do parque', 'err'=>true]);
        }else{
            $ordem = new Ordem();
            $counter = 10000;
            $uuid = Str::uuid()->toString();
            $totalCombustivel = 0;

            $last_order = Ordem::latest()->first();
            if (!empty($last_order)) {
                $new_code = ($last_order->codigo_ordem + 1);
                $ordem->codigo_ordem = $new_code;
            } else {
                $ordem->codigo_ordem = $counter;
            }
            $ordem->refs = $uuid;
            $ordem->bombas_id = $request->bombas_id;
            $ordem->projecto_id = $request->projecto_id;
            $ordem->viatura_id = $request->viatura_id;
            $ordem->createdBy = auth()->user()->id;
            $ordem->save();
            // inicializar rotas
            $rt_total = 0;
            foreach ($request->abastecer as $key => $item) {
                // return $item;
                $totalAbastecer += $item['qtd_abastecer'];

                $rota = Rota::where('id', $item['rota_id'])->get();

                foreach ($rota as $key => $rt) {
                    if ($viatura->capacidade_tanque < $totalAbastecer && ($rt->distancia_km * $viatura->capacidade_media) < $totalAbastecer) {
                        $abastecimento_rota[$key] = Abastecimento_rota::create([
                            'ordem_id' => $ordem->id,
                            'rota_id' => $item['rota_id'],
                            'qtd' => $item['qtd_abastecer'],
                            'turno' => $item['turno'],
                            'razao_abastecimento' => $item['observacao']
                        ]);
                    } else {
                        return response()->json(['erro' => 'Nao pode abastecer acima da capacidade viatura ou tamanho da rota', 'err'=>true]);
                    }
                }


                $totalCombustivel += $item['qtd_abastecer'];
            }
              //abastecer viatura
              $abastecer_viatura = DB::table('viaturas')->where('id', $viatura->id)
              ->update(['qtd_disponivel' => $totalCombustivel]);
            $abastecimento = new Abastecimento();
            $abastecimento_ant = Abastecimento::where('viatura_id', $request->viatura_id)->orderBy('id', 'desc')->first();
            if (!empty($abastecimento_ant)) {
                $abastecimento->ordem_id = $ordem->id;
                $abastecimento->refs = $uuid;
                $abastecimento->qtd_ant = $abastecimento_ant->qtd_rec;
                $abastecimento->qtd_rec = $totalCombustivel;
                $abastecimento->viatura_id = $request->viatura_id;
                $abastecimento->save();
            } else {
                $abastecimento->ordem_id = $ordem->id;
                $abastecimento->refs = $uuid;
                $abastecimento->qtd_ant = 0;
                $abastecimento->qtd_rec = $totalCombustivel;
                $abastecimento->viatura_id = $request->viatura_id;
                $abastecimento->save();
            }
            return response()->json(['success' => 'submetido com sucesso','err'=>false]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($refs)
    {
        $abastecimento = $this->abastecimento->with(['ordem.bombas', 'viatura', 'ordem.abastecimento_rota.rota'])->join('ordems', 'abastecimentos.ordem_id', '=', 'ordems.id')->join('users', 'ordems.createdBy', '=', 'users.id')->where('abastecimentos.refs', $refs)->first();

        return response()->json($abastecimento, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
