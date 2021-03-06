<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\Ordem;
use Illuminate\Http\Request;
use App\Models\Abastecimento_rota;
use App\Models\Rota;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use App\Models\abastecimento;
use App\Models\ordem_viatura;
use App\Models\Viatura;
use App\Models\abastecimentoExtra;
class OrdemController extends Controller
{
    private $ordem;

    function __construct(Ordem $ordem)
    {
        $this->ordem = $ordem;
    }
    public function index()
    {

        $ordem =  $this->ordem->with(['bombas', 'createdBy', 'approvedBy'])->orderBy('id', 'desc')->paginate(15);

        return response()->json($ordem, 200);

    }

    function AprovarOrdem(Request $request)
    {
        $ordem = Ordem::where('refs', $request->refs)->first();
        $ordem->estado = 'Autorizado';
        $ordem->approvedBy = auth()->user()->id;
        $ordem->update();

        return response()->json(['success' => 'Ordem aprovada, a encaminhar para as bombas']);
    }

    function CancelarOrdem(Request $request)
    {
        try {
            $ordem = Ordem::where('refs', $request->refs)->first();
            $ordem->estado = 'Cancelada';
            $ordem->approvedBy = auth()->user()->id;
            $ordem->update();

            if ($ordem) {

                $ordem_viatura = ordem_viatura::where('ordem_id', $ordem->id)->get();
                foreach ($ordem_viatura as $ov => $ordVi) {
                    $viatura[$ov] = Viatura::where('id', $ordVi->viatura_id)->get();
                    $viatura[$ov]->qtd_disponivel = ($viatura[$ov]->qtd_disponivel - $ordVi->qtd_abastecida);
                    $viatura[$ov]->update();
                }

                return response()->json(['message' => 'Ordem cancelada com sucesso'], 200);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erro na transacao, contacte o administrador', $e->getMessage()], 421);
        }
    }

    public function store(Request $request)
    {
        try {
            $ordem = new Ordem();
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
            $ordem->estado = 'aberta';
            $ordem->createdBy = auth()->user()->id;
            $ordem->save();

            if ($ordem) {
                return $ordem->refs;
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'erro na abertura da ordem', 'erro' => true]);
        }
    }


    public function abastecer(Request $request, $refs)
    {
        $totalAbastecer = 0;
        $this->validate($request, [
            'viatura_id' => 'required|integer|exists:viaturas,id',
            'projecto_id' => 'required|integer',
            'abastecer' => 'required|array|min:1',
            'abastecer.*.rota_id' => 'required|integer|exists:rotas,id',
            'abastecer.*.qtd_abastecer' => 'required|numeric|min:0',
            'abastecer.*.turno' => 'required|string|max:255',
        ], [
            'required' => ' o campo :attribute e obrigat&oacute;rio', 'integer' => 'O :attribute deve ser um numero inteiro', 'before_or_equal' => 'O campo :attribute deve ser uma data ou anos antes da data actual', 'numeric' => 'O campo :attribute deve ser valor numerico'
        ]);

        $uuid = Str::uuid()->toString();
        $viatura = Viatura::where('id', $request->viatura_id)->first();

        $totalCombustivel = 0;
        $ordem = Ordem::where('refs', $refs)->first();
        // inicializar rotas
        $rt_total = 0;
        try {
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
                        return response()->json(['erro' => 'Nao pode abastecer acima da capacidade viatura ou tamanho da rota', 'err' => true]);
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
            return response()->json(['success' => 'submetido com sucesso', 'err' => false]);
        } catch (\Throwable $th) {
            return response()->json(['error' => 'Erro no insercao de pedido de abastecimento', 'err' => true]);
        }
    }

    public function show(Ordem $ordem, $refs)
    {
        $ordem  = Ordem::where('refs', $refs)->with(['abastecimento', 'abastecimento_rota.viatura', 'bombas', 'abastecimento_extra'])->first();

        return response()->json($ordem, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ordem  $ordem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ordem $ordem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ordem  $ordem
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ordem $ordem)
    {
        //
    }
}
