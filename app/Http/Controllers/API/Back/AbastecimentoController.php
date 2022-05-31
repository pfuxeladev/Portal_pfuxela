<?php

namespace App\Http\Controllers\API\BACK;

use App\Http\Controllers\Controller;
use App\Models\abastecimento;
use Illuminate\Http\Request;
use App\Models\Ordem;
use App\Models\Viatura;
use App\Models\Abastecimento_rota;
use App\Models\abastecimentoExtra;
use App\Models\abastecimentoRotaViatura;
use App\Models\Bombas;
use App\Models\combustivelBomba;
use App\Models\ordem_viatura;
use App\Models\OrdemViaturaRota;
use App\Models\Rota;
use App\Models\rotaViatura;
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
        $abastecimento = $this->abastecimento->join('ordems', 'abastecimentos.ordem_id', '=', 'ordems.id')
            ->join('bombas', 'ordems.bombas_id', '=', 'bombas.id')
            ->select('ordems.id', 'ordems.codigo_ordem', 'abastecimentos.qtd_ant', 'abastecimentos.qtd_rec', 'bombas.nome_bombas', 'abastecimentos.refs', 'abastecimentos.id as abastecimento_id', 'ordems.estado')->orderBy('abastecimentos.id', 'asc')->paginate(15);

        return $abastecimento;
    }

    function ListarViaturas()
    {
        return Viatura::join('checklist_out', 'checklist_out.viatura_id', '=', 'viaturas.id')
            ->where('viaturas.estado', true)
            ->select('viaturas.matricula', 'viaturas.id')->get();
    }

    function RotaByProject(Request $request)
    {
        return Rota::where('projecto_id', $request->projecto_id)->get();
    }

    function getQtdDisponivel(Request $request)
    {
        $qtdDisponivel = 0;


        $viatura = Viatura::where('id', $request->viatura_id)->first();
        if ($viatura) {
            $qtdDisponivel =  $viatura->qtd_disponivel;

            if (!empty($qtdDisponivel)) {
                return $qtdDisponivel;
            } else {
                return 0;
            }
        }
        return 0;
    }

    function getBomba($refs){
        $bomba = Bombas::join('ordems', 'ordems.bombas_id', '=', 'bombas.id')->where('ordems.refs', $refs)->first();

        return response()->json($bomba);
    }
    public function store(Request $request)
    {

        // return $request->all();
        $totalAbastecer = 0;
        $this->validate($request, [
            'viatura_id' => 'required|integer|exists:viaturas,id',
            'rota_id' => 'required',
            'qtd_abastecer' => 'required|numeric|min:0',
            'turno' => 'required|string|max:255',
        ], [
            'required' => ' o campo :attribute e obrigat&oacute;rio', 'integer' => 'O :attribute deve ser um numero inteiro', 'before_or_equal' => 'O campo :attribute deve ser uma data ou anos antes da data actual', 'numeric' => 'O campo :attribute deve ser valor numerico'
        ]);

        $uuid = Str::uuid()->toString();

        $ordem = Ordem::where('refs', $request->ordem_id)->first();

        $combustivel = combustivelBomba::where('bomba_id', $ordem->bombas_id)->first();

        $preco = 0;
        // $totalAbastecer += $request['qtd_abastecer'];
        // ordem viatura
        $preco = $combustivel->preco_actual * $request->qtd_abastecer;

        $ordemViatura = ordem_viatura::create([
            'ordem_id' => $ordem->id,
            'viatura_id' => $request->viatura_id,
            'qtd_abastecida' => $request->qtd_abastecer,
            'preco_consumo' => $preco,
            'user_id' => auth()->user()->id,
        ]);



        //abastecer por rota
        $distanciaTotal = 0;
        foreach ($request->rota_id as $key => $rt) {
            $rotas = Rota::where('id', $rt)->get();

            foreach ($rotas as $key => $dist) {
                $distanciaTotal += $dist->distancia_km;
            }


            $ordemViatura->ordemViaturaRota()->updateOrCreate([
                'rota_id' => $rt,
                'qtd' => $request->qtd_abastecer,
                'preco_total' => $preco,
            ]);
        }

        $viatura = Viatura::where('id', $request->viatura_id)->first();

        $qtdNecessaria = ($distanciaTotal * $viatura->capacidade_media);

        if ($viatura->capacidade_media < $qtdNecessaria) {
            return response()->json(['erro' => 'Erro! Nao pode abastecer acima do que a rota necessita'], 421);
        }

        if ($viatura->capacidade_tanque < $request->qtd_abastecer || $viatura->capacidade_tanque < ($viatura->qtd_disponivel + $request->qtd_abastecer) || $viatura->capacidade_tanque < $qtdNecessaria) {
            return response()->json(['erro' => 'Erro! Nao pode abastecer acima da capacidade do tanque da viatura'], 421);
        } else {
            $qtdAbastecer = ($viatura->qtd_disponivel + $request->qtd_abastecer);

            $viatura->qtd_disponivel = $qtdAbastecer;
            $viatura->update();
        }


        $ordem->estado = 'aberta';
        $ordem->update();
        return response()->json(['success' => 'submetido com sucesso', 'err' => false]);
    }

    function PedidoForm($refs)
    {
        $ordem = ordem_viatura::with(['rota', 'ordem.viatura'])->join('ordems', 'ordem_viaturas.ordem_id', '=', 'ordems.id')->where('ordems.refs', $refs)->get();

        return response()->json($ordem, 200);
    }
    // submeter a ordem apos preenchida
    function submeterAbst()
    {
    }

    /**
     * Abastecimento Extra fora da rota dos projectos da empresa.
     */

    function abastecer(Request $request)
    {

        // return $request->all();

        $ordem = new Ordem();
        $abastecimento = new abastecimento();
        $ordem_viatura = new ordem_viatura();

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
        $ordem->bombas_id = $request->bombas_id;
        $ordem->estado = 'pendente';
        $ordem->createdBy = auth()->user()->id;
        $ordem->save();

        // verificar disponibilidade da viatura
        $viatura = Viatura::where('id', $request->viatura_id)->first();
        if ($viatura->capacidade_tanque < $request->qtd) {
            return response()->json(['erro' => 'Erro! Nao pode abastecer acima da capacidade do tanque da viatua'], 421);
        } else if ($viatura->capacidade_tanque < ($viatura->qtd_disponivel + $request->qtd)) {
            return response()->json(['erro' => 'Erro! Nao pode abastecer acima da capacidade do tanque da viatua'], 421);
        } else {
            $qtdAbastecer = ($viatura->qtd_disponivel + $request->qtd);

            $viatura->qtd_disponivel = $qtdAbastecer;
            $viatura->update();
        }

        try {
            $ordem_viatura->viatura_id = $request->viatura_id;
            $ordem_viatura->ordem_id = $ordem->id;
            $ordem_viatura->qtd_abastecida = $request->qtd;
            $ordem_viatura->user_id = auth()->user()->id;
            $ordem_viatura->save();

            $abastecimento_extra = new abastecimentoExtra();

            $abastecimento_ant = Abastecimento::where('bombas_id', $ordem->bombas_id)->orderBy('id', 'desc')->first();
            if (!empty($abastecimento_ant)) {
                $abastecimento->ordem_id = $ordem->id;
                $abastecimento->bombas_id = $request->bombas_id;
                $abastecimento->refs = $uuid;
                $abastecimento->qtd_ant = $abastecimento_ant->qtd_rec;
                $abastecimento->qtd_rec = $request->qtd;
                $abastecimento->save();

                $abastecimento_extra->abastecimento_id = $abastecimento->id;
            } else {
                $abastecimento->ordem_id = $ordem->id;
                $abastecimento->bombas_id = $request->bombas_id;
                $abastecimento->refs = $uuid;
                $abastecimento->qtd_ant = 0;
                $abastecimento->qtd_rec = $request->qtd;
                $abastecimento->save();

                $abastecimento_extra->abastecimento_id = $abastecimento->id;
            }

            $abastecimento_extra->viatura_id = $request->viatura_id;
            $abastecimento_extra->motorista_id = $request->motorista_id;
            $abastecimento_extra->qtd = $request->qtd;
            $abastecimento_extra->horaSaida = $request->horaSaida;
            $abastecimento_extra->destino = $request->destino;
            $abastecimento_extra->descricao = $request->descricao;
            $abastecimento_extra->createdBy = auth()->user()->id;
            $abastecimento_extra->save();

            return response()->json(['success' => 'Requisicao feita com sucesso!'], 200);
        } catch (\Exception $e) {
            return response()->json(['erro' => 'Erro! Ocorreu algum problema contacte o administrador'], 421);
        }
    }

    public function show($refs)
    {
        $abastecimento = $this->abastecimento->with(['ordem.bombas', 'ordem.viatura', 'ordem.abastecimento_rota.rota', 'ordem.createdBy', 'ordem.approvedBy', 'ordem.ordem_viatura.viatura', 'abastecimento_extra'])->where('abastecimentos.refs', $refs)->first();

        return response()->json($abastecimento, 200);
    }

    function abastecimentoRecorrente(Request $request)
    {
        if ($search = $request->q) {
            return abastecimentoExtra::join('abastecimentos', 'abastecimento_extras.abastecimento_id', '=', 'abastecimentos.id')->join('abastecimentos', 'abastecimentos.ordem_id', '=', 'ordems.id')->join('viaturas', 'viaturas.id', '=', 'abastecimento_extras.viatura_id')
                ->join('motoristas', 'abastecimento_extras.motorista_id', '=', 'motoristas.id')
                ->when(request('q'), function ($query) use ($search) {
                    $query->where('ordems.codigo', 'like', '%' . request('q') . '%')
                        ->orWhere('viaturas.matricula', 'like', '%' . request('q') . '%')
                        ->orWhere('bombas.nome_bombas', 'like', '%' . request('q') . '%');
                })->with(['abastecimento.ordem', 'viatura', 'motorista.person'])->orderBy('abastecimento_extras.id', 'ASC')->paginate(request('perPage'));
        } else {
            return abastecimentoExtra::with(['abastecimento.ordem', 'viatura', 'motorista.person'])->join('abastecimentos', 'abastecimento_extras.abastecimento_id', '=', 'abastecimentos.id')->join('bombas', 'abastecimentos.bombas_id', '=', 'bombas.id')->orderBy('abastecimento_extras.id', 'ASC')->paginate(10);
        }
    }

    public function requestRecDetails(Request $request, $refs)
    {

        $order = Ordem::where('ordems.refs', $refs)->first();

        $abastecimento_extra = abastecimentoExtra::with(['abastecimento.ordem', 'viatura', 'motorista.person'])->join('abastecimentos', 'abastecimento_extras.abastecimento_id', '=', 'abastecimentos.id')->join('bombas', 'abastecimentos.bombas_id', '=', 'bombas.id')->join('ordems', 'abastecimentos.ordem_id', '=', 'ordems.id')->where('ordems.id', $order->id)->first();

        return response()->json($abastecimento_extra);
    }
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
