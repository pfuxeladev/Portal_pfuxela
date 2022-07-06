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
use App\Models\abastecimentoViatura;
use App\Models\Bombas;
use App\Models\combustivelBomba;
use App\Models\ordem_viatura;
use App\Models\OrdemViaturaRota;
use App\Models\responsavelBombas;
use App\Models\Rota;
use App\Models\rotaViatura;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use PDF;
use Mail;
use Illuminate\Support\Facades\Storage;

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
        $abastecimento = $this->abastecimento->with(['user', 'ordem.bombas', 'ordem.approvedBy', 'ordem.createdBy'])->orderBy('id', 'desc')->paginate(15);

        return $abastecimento;
    }

    function ListarViaturas()
    {
        return Viatura::join('checkelist_out', 'viaturas.id', '=', 'checkelist_out.viatura_id')->where('viaturas.estado', true)
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

    function getBomba($refs)
    {
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

        // $ordem->bombas_id = $request->bombas_id;
        // $ordem->update();


        $viatura = Viatura::where('id', $request->viatura_id)->first();
        if (!empty(ordem_viatura::where('viatura_id', $viatura->id)->where('ordem_id', $ordem->id)->first()))
            return response()->json(['erro' => 'Erro! Nao pode abastecer mais de uma vez a viatura na mesma ordem'], 421);

        $preco = 0;

        $combustivel = combustivelBomba::join('combustivels', 'combustivel_bombas.combustivel_id', '=', 'combustivels.id')->where('bomba_id', $ordem->bombas_id)
            ->select('combustivels.tipo_combustivel', 'combustivel_bombas.preco_actual')->where('combustivels.tipo_combustivel', $viatura->tipo_combustivel)->first();

        // if ($combustivel) {
            if ($viatura->tipo_combustivel === $combustivel->tipo_combustivel) {
                # code...
                $preco = ($combustivel->preco_actual * $request->qtd_abastecer);
            }
            // else {
        //         return response()->json(['erro', 'A Bomba nao tem ' . $viatura->tipo_combustivel . ' so pode abastecer ' . $combustivel->tipo_combustivel], 421);
        //     }
        // } else {
        //     return response()->json(['erro' => 'A Bomba nao tem ' . $viatura->tipo_combustivel], 421);
        // }



        $ordemViatura = ordem_viatura::create([
            'ordem_id' => $ordem->id,
            'viatura_id' => $request->viatura_id,
            'qtd_abastecida' => $request->qtd_abastecer,
            'preco_cunsumo' => $preco,
            'user_id' => auth()->user()->id,
            'justificacao' => $request->observacao,
        ]);

        //abastecer por rota
        $distanciaTotal = 0;

        foreach ($request->rota_id as $key => $rt) {
            $rotas = Rota::where('id', $rt)->get();

            foreach ($rotas as $key => $dist) {
                $distanciaTotal += $dist->distancia_km;
            }
            $qtdNecessaria = ($distanciaTotal * $viatura->capacidade_media) + 15;

            if ($request->qtd_abastecer > $qtdNecessaria) {

                $ordemViatura->delete();

                // return $qtdNecessaria;

                return response()->json(['erro' => 'Erro! Nao pode abastecer acima do que a rota necessita, a rota so precisa de ' . $qtdNecessaria], 421);
            }

            $ordemViatura->ordemViaturaRota()->create([
                'rota_id' => $rt,
                'qtd' => $request->qtd_abastecer,
                'preco_total' => $preco,
                'justificacao' => $request->observacao,
            ]);
        }

        if ($viatura->capacidade_tanque < ($viatura->qtd_disponivel + $request->qtd_abastecer) && $viatura->capacidade_tanque < $qtdNecessaria) {
            return response()->json(['erro' => 'Erro! Nao pode abastecer acima da capacidade do tanque da viatura'], 421);
        } else {
            $qtdAbastecer = ($viatura->qtd_disponivel + $request->qtd_abastecer);

            $viatura->qtd_disponivel = $qtdAbastecer;
            $viatura->update();
        }

        $ordem->estado = 'Aberta';
        $ordem->update();
        return response()->json(['success' => 'submetido com sucesso', 'err' => false]);
    }

    function PedidoForm($refs)
    {
        $ordem = ordem::where('refs', $refs)->first();
        $ordem_viatura = ordem_viatura::with(['rota', 'ordem.viatura', 'ordem.bombas', 'ordemViaturaRota'])->where('ordem_id', $ordem->id)->get();

        return response()->json($ordem_viatura, 200);
    }
    // remover linha
    function removeLine($refs)
    {
        try {
            $ordem = ordem::where('id', $refs)->first();
            $ordem_viatura = ordem_viatura::with(['ordem.viatura', 'ordem.bombas', 'ordemViaturaRota'])->where('ordem_id', $ordem->id)->get();
            foreach ($ordem_viatura as $key => $ordVi) {

                $viatura = Viatura::where('id', $ordVi->viatura_id)->first();
                $viatura->qtd_disponivel = ($viatura->qtd_disponivel - $ordVi->qtd_abastecida);
                $viatura->update();

                $ordem_viatura_rota = OrdemViaturaRota::where('ordem_viatura_id', $ordVi->id)->delete();
                $ordVi->delete();
            }
            return response()->json(['success' => 'removido pode reabastecer a viatura'], 200);
        } catch (\Exception $e) {
            return response()->json(['erro' => 'Erro! ' . $e->getMessage()], 421);
        }
    }
    // submeter a ordem apos preenchida
    function submeterAbst(Request $request)
    {
        $totalAbst = 0;
        // try{
            if (empty($request->ordem_viatura)) {
                return response()->json(['erro' => 'Erro! Selecione pelos menos uma viatura'], 421);
            }
            foreach ($request->ordem_viatura as $key => $abst) {
                // return $abst['qtd_abastecida'];
                $totalAbst += $abst['qtd_abastecida'];
            }

            $ordem = Ordem::where('refs', $request->refs)->first();


            $abastecimento = new abastecimento();

            $uuid = Str::uuid()->toString();

            $abastecimento_ant = Abastecimento::where('bombas_id', $ordem->bombas_id)->orderBy('id', 'desc')->first();
            if (!empty($abastecimento_ant)) {
                $abastecimento->ordem_id = $ordem->id;
                $abastecimento->bombas_id = $ordem->bombas_id;
                $abastecimento->refs = $uuid;
                $abastecimento->qtd_ant = $abastecimento_ant->qtd_rec;
                $abastecimento->qtd_rec = $totalAbst;
                $abastecimento->user_id = auth()->user()->id;
                $abastecimento->save();

                $ordem->estado = 'Pendente';
                $ordem->update();
            } else {
                $abastecimento->ordem_id = $ordem->id;
                $abastecimento->bombas_id = $ordem->bombas_id;
                $abastecimento->refs = $uuid;
                $abastecimento->qtd_ant = 0;
                $abastecimento->qtd_rec = $totalAbst;
                $abastecimento->user_id = auth()->user()->id;
                $abastecimento->save();

                $ordem->estado = 'Pendente';
                $ordem->update();
            }
            return response()->json(['success' => 'ordem submetida com sucesso aguarde a confirmacao'], 200);
        // } catch (\Exception $e) {
        //     return response()->json(['erro' => 'Erro! Ocorreu um erro na submissao da ordem contacte o administrador do sistema ou verifique os dados'], 421);
        // }
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
        $ordem->estado = 'Pendente';
        $ordem->tipo_ordem = 'extra';
        $ordem->createdBy = auth()->user()->id;
        $ordem->save();

        $viatura = Viatura::where('id', $request->viatura_id)->first();
        if (!empty(ordem_viatura::where('viatura_id', $viatura->id)->where('ordem_id', $ordem->id)->first()))
            return response()->json(['erro' => 'Erro! Nao pode abastecer mais de uma vez a viatura na mesma ordem'], 421);


        $preco = 0;

        $combustivel = combustivelBomba::join('combustivels', 'combustivel_bombas.combustivel_id', '=', 'combustivels.id')->where('bomba_id', $ordem->bombas_id)
            ->select('combustivels.tipo_combustivel', 'combustivel_bombas.preco_actual')->where('combustivels.tipo_combustivel', $viatura->tipo_combustivel)->first();

        // if ($combustivel) {
            if ($viatura->tipo_combustivel === $combustivel->tipo_combustivel) {

                $preco = ($combustivel->preco_actual * $request->qtd);
                $ordem_viatura->preco_cunsumo = $preco;
            } else {
                return response()->json(['erro', 'A Bomba nao tem ' . $viatura->tipo_combustivel . ' so pode abastecer ' . $combustivel->tipo_combustivel], 421);
            }
        // } else {
        //     return response()->json(['erro' => 'A Bomba nao tem ' . $viatura->tipo_combustivel], 421);
        // }


        // verificar disponibilidade da viatura

        if ($viatura->capacidade_tanque < $request->qtd) {
            return response()->json(['erro' => 'Erro! Nao pode abastecer acima da capacidade do tanque da viatua'], 421);
        } else if ($viatura->capacidade_tanque < ($viatura->qtd_disponivel + $request->qtd)) {
            return response()->json(['erro' => 'Erro! Nao pode abastecer acima da capacidade do tanque da viatua'], 421);
        } else {
            $qtdAbastecer = ($viatura->qtd_disponivel + $request->qtd);

            $viatura->qtd_disponivel = $qtdAbastecer;
            $viatura->update();
        }

        // try {
        $ordem_viatura->viatura_id = $request->viatura_id;
        $ordem_viatura->ordem_id = $ordem->id;
        $ordem_viatura->qtd_abastecida = $request->qtd;

        $ordem_viatura->justificacao = $request->descricao;
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
            $abastecimento->user_id = auth()->user()->id;
            $abastecimento->save();
            $abastecimento_extra->abastecimento_id = $abastecimento->id;
        } else {
            $abastecimento->ordem_id = $ordem->id;
            $abastecimento->bombas_id = $request->bombas_id;
            $abastecimento->refs = $uuid;
            $abastecimento->qtd_ant = 0;
            $abastecimento->qtd_rec = $request->qtd;
            $abastecimento->user_id = auth()->user()->id;
            $abastecimento->save();

            $abastecimento_extra->abastecimento_id = $abastecimento->id;
        }

        $abastecimento_extra->viatura_id = $request->viatura_id;
        $abastecimento_extra->motorista_id = $request->motorista_id;
        $abastecimento_extra->qtd = $request->qtd;
        $abastecimento_extra->horaSaida = date('h:i:s', strtotime($request->horaSaida));
        $abastecimento_extra->destino = $request->destino;
        $abastecimento_extra->descricao = $request->descricao;
        $abastecimento_extra->createdBy = auth()->user()->id;
        $abastecimento_extra->save();

        if ($ordem) {
            $abastecimento_extra = abastecimentoExtra::with(['abastecimento.ordem', 'viatura', 'motorista.person'])->join('abastecimentos', 'abastecimento_extras.abastecimento_id', '=', 'abastecimentos.id')->join('bombas', 'abastecimentos.bombas_id', '=', 'bombas.id')->join('ordems', 'abastecimentos.ordem_id', '=', 'ordems.id')->where('ordems.id', $ordem->id)->first();

            $responsavel = responsavelBombas::where('bombas_id', $ordem->bombas_id)->get();
            foreach ($responsavel as $key => $bombas_mail) {
                $data["email"] = $bombas_mail->email_bomba;
                $data["title"] = "info@pfuxela.co.mz";
                $data["body"] = "Ordem de abastecimento nr ".$ordem->codigo_ordem;

                 $pdf = PDF::loadView('orderMail.mail_order', compact('ordem'))->setOptions(['defaultFont' => 'sans-serif']);
                 $path = Storage::put('public/pdf/ordem_abastecimentoo'.$ordem->codigo_ordem.'.pdf', $pdf->output());

                Mail::send('orderMail.mail_order', compact('ordem'), function($message)use($data, $pdf) {
                    $message->from(env('MAIL_USERNAME'));
                    $message->to($data["email"], $data['email'])
                            ->subject($data["title"])
                            ->attachData($pdf->output(), "ordem.pdf");
                });
              }
        }

        return response()->json(['success' => 'Requisicao feita com sucesso!'], 200);

        // } catch (\Exception $e) {
        //     return response()->json(['erro' => 'Erro! Ocorreu algum problema contacte o administrador'], 421);
        // }
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
                    $query->where('ordems.codigo_ordem', 'like', '%' . request('q') . '%')
                        ->orWhere('viaturas.matricula', 'like', '%' . request('q') . '%')
                        ->orWhere('bombas.nome_bombas', 'like', '%' . request('q') . '%');
                })->with(['abastecimento.ordem', 'viatura', 'motorista.person', 'ordem'])->orderBy('abastecimento_extras.id', 'ASC')->paginate(request('perPage'));
        } else {
            return abastecimentoExtra::with(['abastecimento.ordem', 'viatura', 'motorista.person'])->join('abastecimentos', 'abastecimento_extras.abastecimento_id', '=', 'abastecimentos.id')->join('bombas', 'abastecimentos.bombas_id', '=', 'bombas.id')->orderBy('abastecimento_extras.id', 'ASC')->paginate(10);
        }
    }

    public function requestRecDetails($refs)
    {
        $ordem  = Ordem::where('refs', $refs)->with(['bombas.combustivel_bomba', 'bombas.responsavel', 'ordem_viatura.viatura', 'ordem_viatura.ordemViaturaRota.rota.projecto', 'abastecimento', 'createdBy', 'approvedBy'])->first();

        return $ordem;

        $pdf = PDF::loadView('orderMail.mail_order', compact('ordem'))->setOptions(['defaultFont' => 'Times New Roman']);
        Storage::put('public/pdf/ordem_abastecimento.pdf', $pdf->output());

        return $pdf->download('ordem_abastecimento.pdf');


    }


    public function update(Request $request, $id)
    {
        $ordemViatura = OrdemViaturaRota::with(['rota.projecto', 'viatura'])->findOrFail($id);
        return $ordemViatura;
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
