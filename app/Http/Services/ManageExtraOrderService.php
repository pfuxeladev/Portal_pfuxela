<?php

namespace App\Http\Services;

use App\Interfaces\ExtraOrderInterface;
use App\Models\abastecimento;
use App\Models\abastecimentoExtra;
use App\Models\Bombas;
use App\Models\combustivelBomba;
use App\Models\Ordem;
use App\Models\ordem_viatura;
use App\Models\responsavelBombas;
use App\Models\User;
use App\Models\Viatura;
use Illuminate\Support\Str;
use Barryvdh\DomPDF\Facade\PDF;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Stmt\TryCatch;

class ManageExtraOrderService implements ExtraOrderInterface
{

    private $ExtraOrders;

    function __construct(Ordem $ExtraOrders)
    {
        $this->ExtraOrders = $ExtraOrders;
    }

    function ListAll(){
        $ExtraOrders = $this->ExtraOrders::ExtraType()->with(['createdBy','approvedBy'])->join('ordem_viaturas', 'ordems.id', '=', 'ordem_viaturas.ordem_id')
        ->leftJoin('abastecimentos', 'abastecimentos.ordem_id', '=', 'ordems.id')
        ->join('abastecimento_extras', 'abastecimento_extras.abastecimento_id', '=', 'abastecimentos.id')
        ->join('viaturas', 'viaturas.id', '=','ordem_viaturas.viatura_id')
        ->join('bombas', 'ordems.bombas_id', '=', 'bombas.id')->newQuery();

        if(request()->has('q')){
            $ExtraOrders
            ->where('viaturas.matricula', 'Like', '%'.request()->input('q').'%')
            ->orWhere('ordems.codigo_ordem', 'Like', '%'.request()->input('q').'%')
            ->orWhere('ordems.created_at', 'Like', '%'.request()->input('q').'%')
            ->orWhere('bombas.nome_bombas', 'Like', '%'.request()->input('q').'%')
            ->orWhere('abastecimento_extras.horaSaida', 'Like', '%'.request()->input('q').'%')
            ->orWhere('abastecimento_extras.qtd', 'Like', '%'.request()->input('q').'%')
            ->orWhere('abastecimento_extras.categoria_abastecimento', 'Like', '%'.request()->input('q').'%')
            ->orWhere('abasteciemento_extras.destino', 'Like', '%'.request()->input('q').'%');
        }


       $ExtraOrders->select('ordems.*', 'abastecimento_extras.qtd as qtd', 'abastecimento_extras.categoria_abastecimento as categoria', 'abastecimento_extras.destino','abastecimento_extras.horaSaida as hora_de_saida', 'bombas.nome_bombas as bombas', 'viaturas.matricula as viaturas', 'ordem_viaturas.preco_cunsumo', 'viaturas.qtd_disponivel', 'viaturas.kilometragem', 'viaturas.kilometragem_ant as kilometragem_anterior');

        return $ExtraOrders->orderBy('ordems.created_at', 'DESC')->paginate(15)->onEachSide(2)->appends(request()->query());
    }
    public function CreateOrder(array $orderRequest)
    {
        $order = new Ordem();
        $uuid = Str::uuid()->toString();
        $last_order = Ordem::latest()->first();
        $ordem_viatura = new ordem_viatura();

        $counter = 10000;

        if (auth()->user()->role('Gestor de Frotas') || auth()->user()->role('SuperAdmin') || auth()->user()->email === 'piquete@pfuxela.co.mz') {
            if (!empty($last_order)) {
                $new_code = ($last_order->codigo_ordem + 1);
                $order->codigo_ordem = $new_code;
            } else {
                $order->codigo_ordem = $counter;
            }

            $viatura = Viatura::where('matricula', $orderRequest['viatura_matricula'])->first();

            $order->refs = $uuid;
            $order->bombas_id = $orderRequest['bombas_id'];
            $order->estado = 'Pendente';
            $order->tipo_ordem = 'extra';
            $order->createdBy = auth()->user()->id;
            $order->save();

            $combustivel = combustivelBomba::join('combustivels', 'combustivel_bombas.combustivel_id', '=', 'combustivels.id')
                ->where('bomba_id', $orderRequest['bombas_id'])
                ->select('combustivels.tipo_combustivel', 'combustivel_bombas.preco_actual')
                ->where('combustivels.tipo_combustivel', $viatura->tipo_combustivel)->first();
            if (!empty($combustivel->tipo_combustivel)) {

                $preco = ($combustivel->preco_actual * $orderRequest['qtd']);
                $ordem_viatura->preco_cunsumo = $preco;
            } else {
                return response()->json(['erro', 'A Bomba nao tem ' . $viatura->tipo_combustivel . ' so pode abastecer ' . $combustivel->tipo_combustivel], 421);
            }


            // verificar disponibilidade da viatura

            if ($viatura->capacidade_tanque < $orderRequest['qtd']) {
                return response()->json(['erro' => 'Erro! Nao pode abastecer acima da capacidade do tanque da viatua'], 421);
            } else if ($viatura->capacidade_tanque < ($viatura->qtd_disponivel + $orderRequest['qtd'])) {
                return response()->json(['erro' => 'Erro! Nao pode abastecer acima da capacidade do tanque da viatua'], 421);
            } else if ($orderRequest['qtd'] > 15) {
                return response()->json(['erro' => 'Erro! Nao pode abastecer acima da 20 litros'], 421);
            }
            $qtdAbastecer = ($viatura->qtd_disponivel + $orderRequest['qtd']);

            $viatura->qtd_disponivel = $qtdAbastecer;
            $viatura->update();


            $ordem_viatura->viatura_id = $viatura->id;
            $ordem_viatura->ordem_id = $order->id;
            $ordem_viatura->qtd_abastecida = $orderRequest['qtd'];

            $ordem_viatura->justificacao = $orderRequest['descricao'];
            $ordem_viatura->user_id = auth()->user()->id;
            $ordem_viatura->save();

            $this->insertAbastecimento($order, $uuid, $orderRequest, $viatura);
        } else {
            return response()->json(['erro' => 'Nao tem permissao para fazer abastecimento extraordinario contacte o administrador'], 421);
        }
    }

    public function insertAbastecimento($order, $uuid, array $orderRequest, $viatura)
    {
        $abastecimento = new abastecimento();
        $abastecimento_extra = new abastecimentoExtra();

        $abastecimento_ant = abastecimento::where('bombas_id', $order->bombas_id)->orderBy('id', 'desc')->first();
        if (!empty($abastecimento_ant)) {
            $abastecimento->ordem_id = $order->id;
            $abastecimento->bombas_id = $orderRequest['bombas_id'];
            $abastecimento->refs = $uuid;
            $abastecimento->qtd_ant = $abastecimento_ant->qtd_rec;
            $abastecimento->qtd_rec = $orderRequest['qtd'];
            $abastecimento->user_id = auth()->user()->id;
            $abastecimento->save();
            $abastecimento_extra->abastecimento_id = $abastecimento->id;
        } else {
            $abastecimento->ordem_id = $order->id;
            $abastecimento->bombas_id = $orderRequest['bombas_id'];
            $abastecimento->refs = $uuid;
            $abastecimento->qtd_ant = 0;
            $abastecimento->qtd_rec = $orderRequest['qtd'];
            $abastecimento->user_id = auth()->user()->id;
            $abastecimento->save();

            $abastecimento_extra->abastecimento_id = $abastecimento->id;
        }

        $abastecimento_extra->viatura_id = $viatura->id;
        $abastecimento_extra->motorista_id = $orderRequest['motorista_id'];
        $abastecimento_extra->qtd = $orderRequest['qtd'];
        $abastecimento_extra->horaSaida = date('h:i:s', strtotime($orderRequest['horaSaida']));
        $abastecimento_extra->destino = $orderRequest['destino'];
        $abastecimento_extra->categoria_abastecimento = $orderRequest['finalidade'];
        $abastecimento_extra->descricao = $orderRequest['descricao'];
        $abastecimento_extra->createdBy = auth()->user()->id;
        $abastecimento_extra->save();

        if ($order) {
            $this->sendOrder($order);
        }
    }

    function sendOrder($order)
    {


        $abastecimento_extra = abastecimentoExtra::with(['abastecimento.ordem', 'viatura', 'motorista.person'])->join('abastecimentos', 'abastecimento_extras.abastecimento_id', '=', 'abastecimentos.id')->join('bombas', 'abastecimentos.bombas_id', '=', 'bombas.id')->join('ordems', 'abastecimentos.ordem_id', '=', 'ordems.id')->where('ordems.id', $order->id)->first();

        $responsavel = responsavelBombas::where('bombas_id', $order->bombas_id)->get();
        foreach (User::all() as $key => $user) {


            if ($user->email === 'contratos@pfuxela.co.mz' && $user->email === 'fausia@pfuxela.co.mz' && $user->email === 'mauro@pfuxela.co.mz') {
                $data["email"] = $user->email;
                $data["title"] = "info@pfuxela.co.mz";
                $data["body"] = "Ordem de abastecimento nr " . $order->codigo_ordem;

                $pdf = PDF::loadView('orderMail.mail_order', compact('ordem'))->setOptions(['defaultFont' => 'sans-serif']);
                $path = Storage::put('public/pdf/ordem_abastecimento' . $order->codigo_ordem . '.pdf', $pdf->output());

                Mail::send('http://abastecimento.pfuxela.co.mz/Supply/' . $order->refs . '/supply-details', function ($message) use ($data, $pdf) {
                    $message->from(env('MAIL_USERNAME'));
                    $message->to($data["email"], $data['email'])
                        ->subject($data["title"])
                        ->attachData($pdf->output(), "ordem" . date('Y-m-d H:i:s') . ".pdf");
                });
            }
        }

        return response()->json(['success' => 'Requisicao feita com sucesso!'], 200);
    }
    // Visualizar ordem extraordinaria

    function viewExternalOrder($order_id)
    {
        $data = array();
        $order = Ordem::ExtraType()->where('refs', $order_id)->first();


        $extraAbastecimento = abastecimentoExtra::join('abastecimentos', 'abastecimento_extras.abastecimento_id', '=', 'abastecimentos.id')
        ->where('abastecimentos.ordem_id', $order->id)->select('abastecimento_extras.id', 'abastecimento_extras.qtd as qtd', 'abastecimento_extras.categoria_abastecimento', 'abastecimento_extras.destino', 'abastecimento_extras.descricao')->first();
        $order_viatura = ordem_viatura::where('ordem_viaturas.ordem_id', $order->id)->leftJoin('viaturas', 'ordem_viaturas.viatura_id', '=', 'viaturas.id')
        ->select('viaturas.id as viatura_id', 'viaturas.matricula', 'viaturas.kilometragem', 'viaturas.kilometragem_ant as kilometragem_anterior', 'viaturas.capacidade_media', 'viaturas.qtd_disponivel', 'ordem_viaturas.qtd_abastecida as qtd_abastecida', 'ordem_viaturas.preco_cunsumo as subtotal', 'ordem_viaturas.user_id as submetido_por', 'ordem_viaturas.updatedBy')->get();
        $bombas = Bombas::where('id', $order->bombas_id)->first();

        $data = [
            'order'=>$order,
            'extraAbastecimento'=>$extraAbastecimento,
            'order_viatura'=>$order_viatura,
            'bombas'=>$bombas
        ];

        return $data;

    }
    // Aprovacao da Ordem de abastecimento Extraordinario
    public function ApproveOrder($order_id)
    {
    }
}
