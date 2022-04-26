<?php

namespace App\Http\Controllers\API\BACK;

use App\Http\Controllers\Controller;
use App\Models\abastecimento;
use Illuminate\Http\Request;
use App\Models\Ordem;
use App\Models\Viatura;
use App\Models\Abastecimento_rota;
use App\Models\abastecimentoRotaViatura;
use App\Models\ordem_viatura;
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
        $abastecimento = $this->abastecimento->join('ordems', 'abastecimentos.ordem_id','=','ordems.id')
        ->join('bombas', 'ordems.bombas_id','=','bombas.id')
        ->join('ordem_viaturas', 'ordems.id', '=','ordem_viaturas.ordem_id')
        ->join('viaturas', 'ordem_viaturas.viatura_id', '=', 'viaturas.id')
        ->select('ordems.id', 'ordems.codigo_ordem', 'abastecimentos.qtd_ant', 'abastecimentos.qtd_rec','bombas.nome_bombas', 'abastecimentos.refs', 'abastecimentos.id as abastecimento_id', 'viaturas.matricula', 'ordems.estado')->orderBy('abastecimentos.id', 'asc')->paginate(15);

        return $abastecimento;
    }

    function ListarViaturas()
    {
        return Viatura::where('locate', 'IN')->get();
    }

    function RotaByProject(Request $request)
    {
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

        // return $request->all();
        $totalAbastecer = 0;
        $this->validate($request, [
            'abastecer' => 'required|array|min:1',
            'abastecer.*.viatura_id' => 'required|integer|exists:viaturas,id',
            'abastecer.*.rota_id' => 'required',
            'abastecer.*.qtd_abastecer' => 'required|numeric|min:0',
            'abastecer.*.turno' => 'required|string|max:255',
        ], [
            'required' => ' o campo :attribute e obrigat&oacute;rio', 'integer' => 'O :attribute deve ser um numero inteiro', 'before_or_equal' => 'O campo :attribute deve ser uma data ou anos antes da data actual', 'numeric' => 'O campo :attribute deve ser valor numerico'
        ]);

        $uuid = Str::uuid()->toString();

        $ordem = Ordem::where('refs', $request->ordem_id)->first();

        foreach ($request->abastecer as $key => $abst) {
            $totalAbastecer += $abst['qtd_abastecer'];
            ordem_viatura::create([
                'ordem_id' => $ordem->id,
                'viatura_id' => $abst['viatura_id'],
                'qtd_abastecida' => $abst['qtd_abastecer'],
                'user_id' => auth()->user()->id,
            ]);

            $viatura = Viatura::where('id', $abst['viatura_id'])->update(['qtd_disponivel'=>$totalAbastecer]);

            //abastecer por rota
            foreach ($abst['rota_id'] as $key => $rt) {
                Abastecimento_rota::create([
                    'ordem_id' => $ordem->id,
                    'rota_id' => $rt,
                    'turno' => $abst['turno'],
                    'razao_abastecimento' => $abst['observacao']
                ]);

                // alocar viatura a rota
                abastecimentoRotaViatura::updateOrCreate([
                    'viatura_id' => $abst['viatura_id'],
                    'abastecimento_rota_id' => $rt,
                    'createdBy'=>auth()->user()->id,
                    'updatedBy'=>auth()->user()->id
                ]);
            }

        }
        $abastecimento = new Abastecimento();

        $abastecimento_ant = Abastecimento::where('bombas_id', $ordem->bombas_id)->orderBy('id', 'desc')->first();
            if (!empty($abastecimento_ant)) {
                $abastecimento->ordem_id = $ordem->id;
                $abastecimento->refs = $uuid;
                $abastecimento->qtd_ant = $abastecimento_ant->qtd_rec;
                $abastecimento->qtd_rec = $totalAbastecer;
                $abastecimento->save();
            } else {
                $abastecimento->ordem_id = $ordem->id;
                $abastecimento->refs = $uuid;
                $abastecimento->qtd_ant = 0;
                $abastecimento->qtd_rec = $totalAbastecer;
                $abastecimento->save();
            }

            return response()->json(['success' => 'submetido com sucesso','err'=>false]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($refs)
    {
        $abastecimento = $this->abastecimento->with(['ordem.bombas', 'ordem.viatura', 'ordem.abastecimento_rota.rota', 'ordem.createdBy', 'ordem.ordem_viatura.viatura'])->where('abastecimentos.refs', $refs)->first();

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
