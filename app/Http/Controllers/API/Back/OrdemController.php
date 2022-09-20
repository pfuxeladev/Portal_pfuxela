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
use App\Models\bombaInspecao;
use App\Models\Bombas;
use App\Models\OrdemViaturaRota;
use PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use App\Models\responsavelBombas;
use App\Models\combustivelBomba;
use App\Models\User;
use Exception;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;

class OrdemController extends Controller
{
    private $ordem;

    function __construct(Ordem $ordem)
    {
        $this->ordem = $ordem;
    }
    public function index(Request $request)
    {
        if($request->q){
            $ordem =  $this->ordem->with(['bombas', 'createdBy', 'approvedBy'])->where('tipo_ordem', 'rota')
            ->orWhere('codigo_ordem','like', '%' . $request->q . '%')->orderBy('id', 'desc')->orWhere('estado', $request->status)->paginate($request->perPage);
        return response()->json($ordem, 200);
        }else if($request->status){
            $ordem =  $this->ordem->with(['bombas', 'createdBy', 'approvedBy'])->where('tipo_ordem', 'rota')
            ->where('estado', $request->status)->orderBy('id', 'desc')->paginate($request->perPage);
        return response()->json($ordem, 200);
        }else{
            $ordem =  $this->ordem->with(['bombas', 'createdBy', 'approvedBy'])->where('tipo_ordem', 'rota')->orderBy('id', 'desc')->paginate($request->perPage);

            return response()->json($ordem, 200);
        }

    }

    public function OrdensAberta($refs)
    {
        $ordem = $this->ordem->where('refs', $refs)->where('createdBy', auth()->user()->id)->where('estado', 'aberta')->first();
        $ordem_viatura  = ordem_viatura::with(['ordemViaturaRota.rota', 'ordem.viatura', 'viatura', 'ordem.bombas'])->where('ordem_id', $ordem->id)->get();
        if (empty($ordem_viatura)) {
            return response()->json(['message' => 'nenhuma ordem a vista'], 200);
        }

        return response()->json($ordem_viatura, 200);
    }

    function AprovarOrdem(Request $request)
    {
        $ordem = Ordem::where('refs', $request->refs)->first();
        $ordem->estado = 'Autorizado';
        $ordem->approvedBy = auth()->user()->id;
        $ordem->update();
        if ($ordem) {
            $ordem  = Ordem::where('refs', $request->refs)->with(['bombas.combustivel_bomba', 'bombas.responsavel', 'ordem_viatura.viatura', 'ordem_viatura.ordemViaturaRota.rota.projecto', 'abastecimento', 'createdBy', 'approvedBy'])->first();

            $responsavel = responsavelBombas::where('bombas_id', $ordem->bombas_id)->get();
            $bomba_interna = Bombas::where('id', $ordem->bombas_id)->where('tipo_bomba','interna')->first();
            if(!empty($bomba_interna)){
                $ordem_qtd = ordem_viatura::where('ordem_id', $ordem->id)->sum('qtd_abastecida');

                $bomba_interna->qtd_disponivel = ($bomba_interna->qtd_disponivel - $ordem_qtd);
                $bomba_interna->update();

                $bomba_inspect = new bombaInspecao();

                $bomba_inspect->bomba_id = $bomba_interna->id;
                $bomba_inspect->user_id = auth()->user()->id;
                $bomba_inspect->Qtd_actual = $bomba_interna->qtd_disponivel;
                $bomba_inspect->save();
            }
            foreach ($responsavel as $key => $bombas_mail) {
                $data["email"] = $bombas_mail->email_bomba;
                $data["title"] = "Ordem de abastecimento Nr. " . $ordem->codigo_ordem;

                $pdf = PDF::loadView('orderMail.mail_order', compact('ordem'))->setOptions(['defaultFont' => 'sans-serif']);
                $path = Storage::put('public/pdf/ordem_abastecimento' . $ordem->codigo_ordem . '.pdf', $pdf->output());

                Mail::send('orderMail.mail_order', compact('ordem'), function ($message) use ($data, $pdf) {
                    $message->to($data["email"])
                        ->subject($data["title"])
                        ->attachData($pdf->output(), "ordem" . date('Y-m-d H:i:s') . ".pdf");
                });

                $pdf->download('Ordem' . $ordem->codigo_ordem . '.pdf');
            }
                    $data["email"] = ['mauro@pfuxela.co.mz','fausia@pfuxela.co.mz','supportdesk@pfuxela.co.mz'];
                    $data["title"] = "Ordem de abastecimento Nr. " . $ordem->codigo_ordem . " com respectivas rota e projectos";

                    $pdf = PDF::loadView('orderMail.orderWithRotas', compact('ordem'))->setOptions(['defaultFont' => 'sans-serif']);
                    $path = Storage::put('public/pdf/ordem_rotas' . $ordem->codigo_ordem . '.pdf', $pdf->output());

                    Mail::send('orderMail.orderWithRotas', compact('ordem'), function ($message) use ($data, $pdf) {
                        $message->to($data["email"])
                            ->subject($data["title"])
                            ->attachData($pdf->output(), "ordem" . date('Y-m-d H:i:s') . "pdf");
                    });

            return response()->json(['success' => 'Ordem aprovada, a encaminhar para as bombas']);
        }
    }


    function getBomba($refs)
    {
        return Bombas::join('ordems', 'ordems.bombas_id', '=', 'bombas.id')->where('ordems.refs', $refs)->select('bombas.nome_bombas as bombas', 'bombas.id')->first();
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
                    $viatura = Viatura::where('id', $ordVi->viatura_id)->get();
                    foreach ($viatura as $key => $v) {
                        $v->qtd_disponivel = ($v->qtd_disponivel - $ordVi->qtd_abastecida);
                        $v->update();
                    }
                }
                $ordem  = Ordem::where('refs', $request->refs)->with(['bombas.combustivel_bomba', 'bombas.responsavel', 'ordem_viatura.viatura', 'ordem_viatura.ordemViaturaRota.rota.projecto', 'abastecimento', 'createdBy', 'approvedBy'])->first();

                $responsavel = responsavelBombas::where('bombas_id', $ordem->bombas_id)->get();
                foreach ($responsavel as $key => $bombas_mail) {
                    $data["email"] = $bombas_mail->email_bomba;
                    $data["title"] = "Pedido de Cancelamento da Ordem de abastecimento Nr. " . $ordem->codigo_ordem;

                    $pdf = PDF::loadView('orderMail.mail_send', compact('ordem'))->setOptions(['defaultFont' => 'sans-serif']);
                    $path = Storage::put('public/pdf/Cancelamento_ordem' . $ordem->codigo_ordem . '.pdf', $pdf->output());

                    Mail::send('orderMail.mail_send', compact('ordem'), function ($message) use ($data, $pdf) {
                        $message->to($data["email"])
                            ->subject($data["title"])
                            ->attachData($pdf->output(), "ordem" . date('Y-m-d H:i:s') . ".pdf");
                    });
                }
                return response()->json(['message' => 'Ordem cancelada com sucesso'], 200);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erro na transacao, contacte o administrador', $e->getMessage()], 421);
        }
    }

    function DesfazerOrdem(Request $request, $refs)
    {
        try {
            $ordem = Ordem::where('refs', $request->refs)->first();
            $ordem->estado = 'Cancelada';
            $ordem->approvedBy = auth()->user()->id;
            $ordem->update();

            if ($ordem) {

                $ordem_viatura = ordem_viatura::where('ordem_id', $ordem->id)->get();
                foreach ($ordem_viatura as $ov => $ordVi) {
                    $viatura = Viatura::where('id', $ordVi->viatura_id)->get();
                    foreach ($viatura as $key => $v) {
                        $v->qtd_disponivel = ($v->qtd_disponivel - $ordVi->qtd_abastecida);
                        $v->update();
                    }
                }
                return response()->json(['message' => 'Ordem cancelada com sucesso'], 200);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erro na transacao, contacte o administrador', $e->getMessage()], 421);
        }
    }

    function ReabrirOrdem($refs)
    {
        try {
            $ordem = Ordem::where('refs', $refs)->first();
            $ordem->estado = 'Aberta';
            $ordem->approvedBy = auth()->user()->id;
            $ordem->update();

            return response()->json(['success' => 'Ordem Reaberta'], 200);
        } catch (\Exception $e) {
            return response()->json(['erro' => 'Erro! nao conseguiu reabrir a ordem', $e->getMessage()], 421);
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
            if (Ordem::where('estado', 'Aberta')->where('createdBy', auth()->user()->id)->first())
                return response()->json(['error' => 'Erro! Ja existe uma ordem aberta no sistema nao pode abrir mais uma novamente'], 421);

            $ordem->refs = $uuid;
            $ordem->bombas_id = $request->bomba_id;
            $ordem->estado = 'Aberta';
            $ordem->tipo_ordem = 'rota';
            $ordem->createdBy = auth()->user()->id;
            $ordem->save();

            if ($ordem) {
                return $ordem->refs;
            }
        } catch (\Exception $e) {
            return response()->json(['error' => 'erro na abertura da ordem', 'erro' => true], 421);
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
                        return response()->json(['erro' => 'Nao pode abastecer acima da capacidade viatura ou tamanho da rota', 'err' => true], 421);
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
            return response()->json(['error' => 'Erro no insercao de pedido de abastecimento', 'err' => true], 421);
        }
    }

    public function show(Ordem $ordem, $refs)
    {
        $ordem  = Ordem::where('refs', $refs)->with(['bombas.combustivel_bomba', 'ordem_viatura.viatura', 'ordem_viatura.ordemViaturaRota.rota.projecto', 'abastecimento', 'createdBy', 'approvedBy'])->first();

        return response()->json($ordem, 200);
    }

    function imprimirOrdem($refs)
    {
        $ordem  = Ordem::where('refs', $refs)->with(['bombas.combustivel_bomba', 'bombas.responsavel', 'ordem_viatura.viatura', 'ordem_viatura.ordemViaturaRota.rota.projecto', 'abastecimento', 'createdBy', 'approvedBy'])->first();

        $pdf = PDF::loadView('orderMail.mail_order', compact('ordem'))->setOptions(['defaultFont' => 'Times New Roman']);
        Storage::put('public/pdf/ordem_abastecimento.pdf', $pdf->output());
        // return $pdf->download('ordem.pdf');

        // return response()->json($ordem, 200);

        return view('orderMail.orderWithRotas', compact('ordem'));
    }

    function editOrder(Request $request, $refs)
    {
        $ordem = Ordem::where('refs', $refs)->first();
        $ordem_viatura  = ordem_viatura::where('ordem_id', $ordem->id)->get();
        foreach ($ordem_viatura as $key => $v) {
            return OrdemViaturaRota::with(['rota.projecto', 'ordem_viatura.viatura'])->get();
        }
    }
    public function update(Request $request)
    {

        $ordem = Ordem::where('refs', $request->refs)->first();
        $ordem->bombas_id = $request->bombas_id;
        $ordem->update();

        $preco = 0;

        try {
            foreach ($request->ordem_viatura as $key => $v) {
                // return $v;
                $viatura = Viatura::where('id', $v['viatura_id'])->get();

                // return $viatura;

                foreach ($viatura as $key => $viatura1) {
                    $combustivel = combustivelBomba::join('combustivels', 'combustivel_bombas.combustivel_id', '=', 'combustivels.id')->where('bomba_id', $ordem->bombas_id)
                        ->select('combustivels.tipo_combustivel', 'combustivel_bombas.preco_actual')->where('combustivels.tipo_combustivel', $viatura1->tipo_combustivel)->get();

                    foreach ($combustivel as $key => $comb) {
                        if ($comb) {
                            if ($viatura1->tipo_combustivel === $comb->tipo_combustivel) {
                                # code...
                                $preco = ($comb->preco_actual * $v['qtd_abastecida']);
                            } else {
                                return response()->json(['erro', 'A Bomba nao tem ' . $viatura1->tipo_combustivel . ' so pode abastecer ' . $comb->tipo_combustivel], 421);
                            }
                        } else {
                            return response()->json(['erro' => 'A Bomba nao tem ' . $viatura1->tipo_combustivel], 421);
                        }
                    }

                    ordem_viatura::where('ordem_id', '=', $ordem->id)->update(['qtd_abastecida' => $v['qtd_abastecida'], 'preco_cunsumo' => $preco]);

                    DB::table('viaturas')->where('id', $v['viatura_id'])->update(['qtd_disponivel' => $v['qtd_abastecida']]);
                }
            }
            return response()->json(['success' => 'actualizado com sucesso'], 200);
        } catch (\Exception $e) {
            return response()->json(['erro' => 'Ocorreu um erro na atualizacao ' . $e->getMessage()], 421);
        }
    }

    function RelatorioGeral(Request $request)
    {
        if($request->params['q']){
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
            ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
            ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
            ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
            ->where('bombas.nome_bombas', $request->params['q'])
            ->where('ordems.codigo_ordem', 'like', '%' . $request->params['q'] . '%')
            ->orWhere('viaturas.matricula', 'like', '%' . $request->params['q'] . '%')
            ->orWhere('viaturas.tipo_combustivel', 'like', '%' . $request->params['q'] . '%')
            ->orWhere('rotas.nome_rota', 'like', '%' . $request->params['q'] . '%')
            ->orderBy('ordems.updated_at', 'desc')->paginate($request->params['perPage']);

            return response()->json($ordem_viatura, 200);
        } else if ($request->params['q'] && $request->params['bombaNome']) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', $request->params['bombaNome'])
                ->where('ordems.codigo_ordem', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('viaturas.matricula', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('viaturas.tipo_combustivel', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('rotas.nome_rota', 'like', '%' . $request->params['q'] . '%')
                ->orderBy('ordems.updated_at', 'desc')->paginate($request->params['perPage']);

            return response()->json($ordem_viatura, 200);
        } else if ($request->params['intervalo']) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereBetween('created_at', $request->params['intervalo'])->orderBy('updated_at', 'desc')->paginate($request->params['perPage']);

            return response()->json($ordem_viatura, 200);
        } else if ($request->params['intervalo'] && $request->params['q'] && $request->params['bombaNome']) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])
                ->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', $request->params['bombaNome'])
                ->where('ordems.codigo_ordem', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('viaturas.matricula', 'like', '%' . $request->params['q'] . '%')

                ->orWhere('viaturas.tipo_combustivel', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('rotas.nome_rota', 'like', '%' . $request->params['q'] . '%')
                ->orderBy('ordems.updated_at', 'desc')->whereBetween(DB::raw('DATE(ordems.created_at)'), $request->params['intervalo'])->orderBy('ordems.updated_at', 'desc')->paginate($request->params['perPage']);

            return response()->json($ordem_viatura, 200);
        } else if ($request->params['dateReport'] === 'Semanal') {

            // [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->orderBy('updated_at', 'desc')->paginate($request->params['perPage']);
            return response()->json($ordem_viatura, 200);
        } else if ($request->params['dateReport'] === 'Mensal') {

            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereMonth('created_at', date('m'))
                ->whereYear('created_at', date('Y'))->orderBy('updated_at', 'desc')->paginate($request->params['perPage']);
            return response()->json($ordem_viatura, 200);

            // return $pdf->download('Relatorio.pdf');
        } else if ($request->params['dateReport'] === 'Hoje') {


            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereDate('created_at', Carbon::today())->orderBy('updated_at', 'desc')->paginate($request->params['perPage']);
            return response()->json($ordem_viatura, 200);

            // return $pdf->download('Relatorio.pdf');
        } else if ($request->params['intervalo'] && $request->params['q'] && $request->params['bombaNome'] && $request->params['dateReport'] === 'Hoje') {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])
                ->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', $request->params['bombaNome'])
                ->where('ordems.codigo_ordem', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('viaturas.matricula', 'like', '%' . $request->params['q'] . '%')

                ->orWhere('viaturas.tipo_combustivel', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('rotas.nome_rota', 'like', '%' . $request->params['q'] . '%')
                ->whereDate('ordem.updated_at', Carbon::today())
                ->orderBy('ordems.updated_at', 'desc')->whereBetween(DB::raw('DATE(ordems.created_at)'), $request->params['intervalo'])->orderBy('ordems.updated_at', 'desc')->paginate($request->params['perPage']);

            return response()->json($ordem_viatura, 200);
        } else if ($request->params['intervalo'] && $request->params['q'] && $request->params['bombaNome'] && $request->params['dateReport'] === 'Semanal') {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])
                ->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', $request->params['bombaNome'])
                ->where('ordems.codigo_ordem', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('viaturas.matricula', 'like', '%' . $request->params['q'] . '%')

                ->orWhere('viaturas.tipo_combustivel', 'like', '%' . $request->params['q'] . '%')
                ->orWhere('rotas.nome_rota', 'like', '%' . $request->params['q'] . '%')
                ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                ->orderBy('ordems.updated_at', 'desc')->whereBetween(DB::raw('DATE(ordems.created_at)'), $request->params['intervalo'])->orderBy('ordems.updated_at', 'desc')->paginate($request->params['perPage']);

            return response()->json($ordem_viatura, 200);
        } else if ($request->params['bombaNome'] && $request->params['intervalo']) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])
                ->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->whereBetween(DB::raw('DATE(ordems.created_at)'), $request->params['intervalo'])
                ->where('bombas.nome_bombas', $request->params['bombaNome'])->orderBy('ordems.updated_at', 'desc')->paginate($request->params['perPage']);

            return response()->json($ordem_viatura, 200);
        } else if ($request->params['bombaNome']) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])
                ->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', $request->params['bombaNome'])->orderBy('ordems.updated_at', 'desc')->paginate($request->params['perPage']);

            return response()->json($ordem_viatura, 200);
        } else {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->orderBy('updated_at', 'desc')->paginate(10);
            return response()->json($ordem_viatura, 200);
        }
    }

    function printRelatorio(Request $request)
    {
        // return $request->all();
        if ($request->intervalo) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereBetween('created_at', $request->intervalo)->orderBy('updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

            return $pdf->output();
        } else if ($request->dateReport === 'Semanal') {
            // [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()]
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->orderBy('updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

            return $pdf->output();
        } else if ($request->dateReport === 'Mensal') {

            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereMonth('created_at', date('m'))
                ->whereYear('created_at', date('Y'))->orderBy('ordems.updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

            return $pdf->output();

            // return $pdf->download('Relatorio.pdf');
        } else if ($request->dateReport === 'Hoje') {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereDate('created_at', Carbon::today())->orderBy('updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

            // return $pdf->output();

            // return $pdf->download('Relatorio.pdf');
        } else if ($request->intervalo && $request->searchDatas && $request->bombaNome) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereBetween(DB::raw('DATE(ordems.created_at)'), $request->intervalo)->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', $request->bombaNome)
                ->where('ordems.codigo_ordem', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('viaturas.matricula', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('bombas.nome_bombas', 'like', '%' . $request->bombaNome . '%')
                ->orWhere('viaturas.tipo_combustivel', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('rotas.nome_rota', 'like', '%' . $request->searchDatas . '%')
                ->orderBy('ordem_viaturas.updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

            return $pdf->output();
        } else if ($request->intervalo && $request->searchDatas && $request->bombaNome) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->whereBetween(DB::raw('DATE(ordems.created_at)'), $request->intervalo)->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', $request->bombaNome)
                ->where('ordems.codigo_ordem', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('viaturas.matricula', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('bombas.nome_bombas', 'like', '%' . $request->seachDatas . '%')
                ->orWhere('viaturas.tipo_combustivel', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('rotas.nome_rota', 'like', '%' . $request->searchDatas . '%')
                ->orderBy('ordem_viaturas.updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

            return $pdf->output();
        } else if ($request->searchDatas) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])
                ->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('ordems.codigo_ordem', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('viaturas.matricula', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('bombas.nome_bombas', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('viaturas.tipo_combustivel', 'like', '%' . $request->searchDatas . '%')
                ->orWhere('rotas.nome_rota', 'like', '%' . $request->searchDatas . '%')
                ->orderBy('ordem_viaturas.updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

            return $pdf->output();
        } else if ($request->bombaNome) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])
                ->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', 'like', '%' . $request->bombaNome . '%')
                ->orderBy('ordem_viaturas.updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));
        } else if ($request->bombaNome && $request->intervalo) {
            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])
                ->join('ordems', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
                ->join('bombas', 'bombas.id', '=', 'ordems.bombas_id')->join('viaturas', 'viaturas.id', '=', 'ordem_viaturas.viatura_id')
                ->join('ordem_viatura_rotas', 'ordem_viaturas.id', '=', 'ordem_viatura_rotas.ordem_viatura_id')
                ->join('rotas', 'ordem_viatura_rotas.rota_id', '=', 'rotas.id')->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
                ->where('bombas.nome_bombas', $request->bombaNome)
                ->whereBetween(DB::raw('DATE(ordems.created_at)'), $request->intervalo)
                ->orderBy('ordem_viaturas.updated_at', 'desc')->get();
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));
        } else {

            $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas', 'ordem.approvedBy'])->orderBy('updated_at', 'desc')->get();
            // return view('reportMail.relatorioAbastecimento', compact('ordem_viatura'));
            $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

            return $pdf->output();
        }
    }

    // Relatorio Semanal
    public function SendWeeklyReport()
    {
        try {


                $data["email"] = ['mauro@pfuxela.co.mz','fausia@pfuxela.co.mz','supportdesk@pfuxela.co.mz', 'piquete@pfuxela.co.mz'];
                $data["title"] = "Relatorio Diario";
                // $data["body"] = "Receba em anexo o relatorio de abastecimento semanal enviado pelo sistema";


                $ordem_viatura = ordem_viatura::with(['ordemViaturaRota.rota.projecto', 'viatura', 'ordem.bombas'])
                ->where('created_at','>=', Carbon::now()->subDays(1))->orderBy('updated_at', 'desc')->get();


                $pdf = PDF::loadView('reportMail.relatorioAbastecimento', compact('ordem_viatura'));

                $path = Storage::put('public/pdf/relatorio_bastecimento' . date('Y-m-d H:i:s') . '.pdf', $pdf->output());
                Mail::send('reportMail.message_report', $data, function ($message) use ($data, $pdf) {
                    $message->to($data["email"])
                        ->subject($data["title"])
                        ->attachData($pdf->output(), 'relatorio_diario' . date('Y-m-d H:i:s') . '.pdf');
                });
                Log::info('email sent to: Users');
                return response()->json(['message' => 'email sent to: Users successfully']);


    } catch (Exception $e) {
        return "Something went wrong! ".$e->getMessage();
    }
    }

    public function printPdf()
    {
        $pdf = PDF::loadView('orderMail.ExtraOrder')->setOptions(['defaultFont' => 'Verdana']);
        return $pdf->download('ordem.pdf');
    }
}
