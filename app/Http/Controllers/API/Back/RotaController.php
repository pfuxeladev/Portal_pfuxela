<?php

namespace App\Http\Controllers\API\BACK;

use App\Http\Controllers\Controller;
use App\Models\projecto;
use App\Models\Rota;
use App\Models\Horario;
use Illuminate\Http\Request;

class RotaController extends Controller
{
    private $rota;
    function __construct(Rota $rota)
    {
        $this->rota = $rota;
    }
    public function index()
    {

        return $this->rota->with(['projecto', 'horario'])->where('is_active', true)->orderBy('nome_rota', 'asc')->paginate(15);
    }

    function todasRotas()
    {
        if (auth()->user()->hasRole('Gestor de Frotas') || auth()->user()->hasRole('SuperAdmin')) {
            return $this->rota->with('projecto')->where('is_active', true)->get();
        } else {
            return $this->rota->with('projecto')->where('is_active', true)->where('projecto_id', '!=', '29')->get();
        }
    }

    function todosProjectos()
    {
        return projecto::all();
    }
    public function store(Request $request)
    {
        $rota = new Rota();

        $this->validate($request, [
            'nome_rota' => 'required|string|max:191',
            'endereco' => 'required|string|max:255',
            'distancia_km' => 'required|numeric|min:0',
            'horario' => 'required|array|min:1',
            'horario.*.horaPartida' => 'required',
            'horario.*.horaChegada' => 'required',
            'horario.*.turno' => 'required',
            'tipoRota' => 'required',
            'projecto_id' => 'required|integer'
        ], ['required' => ' o campo :attribute e obrigat&oacute;rio', 'integer' => 'O :attribute deve ser um numero inteiro', 'before_or_equal' => 'O campo :attribute deve ser uma data ou anos antes da data actual', 'numeric' => 'O campo :attribute deve ser valor numerico',]);
        if (Rota::where('nome_rota', $request->nome_rota)->first()) {
            return response()->json(['err' => 'Ja existe uma rota cadastrada com esses dados'], 421);
        }

        if (Rota::where('nome_rota', $request->nome_rota)->first()) {
            return response()->json(['err' => 'Ja existe uma rota cadastrada com esses dados'], 421);
        }
        $rota->nome_rota = $request->nome_rota;
        $rota->endereco = $request->endereco;
        $rota->distancia_km = $request->distancia_km;
        $rota->tipoRota = $request->tipoRota;
        $rota->projecto_id  = $request->projecto_id;
        $rota->is_active = true;
        $rota->save();

        foreach ($request->horario as $horario) {
            Horario::create([
                'rota_id' => $rota->id,
                'horaPartida' => $horario['horaPartida'],
                'horaChegada' => $horario['horaChegada'],
                'turno' => $horario['turno'],
            ]);
        }

        if ($rota) {
            return response()->json(['message' => 'rota adicionada com sucesso'], 200);
        } else {
            return response()->json(['err' => 'erro na insercao de dados'], 421);
        }
    }

   function relactorioRota(Request $request){
       $rotas = Rota::join('ordem_viatura_rotas', 'rotas.id', '=', 'ordem_viatura_rotas.id')
       ->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')
        ->join('ordem_viaturas', 'ordem_viatura_rotas.ordem_viatura_id', '=', 'ordem_viaturas.id')
        ->join('viaturas', 'ordem_viaturas.viatura_id', '=', 'viaturas.id')
        ->join('ordems','ordem_viaturas.ordem_id', 'ordems.id')
        ->join('bombas', 'ordems.bombas_id', '=', 'bombas.id')
        ->join('users', 'ordems.createdBy', '=', 'users.id')
        ->select('rotas.id as rota_id', 'ordems.codigo_ordem as codigo', 'viaturas.matricula as matricula', 'viaturas.tipo_combustivel as combustivel', 'bombas.nome_bombas as bombas', 'ordem_viatura_rotas.qtd as qtd', 'ordem_viatura_rotas.preco_total','rotas.nome_rota', 'projectos.name as projecto', 'users.name as autor', 'ordems.created_at')
        ->orderBy('ordems.id', 'desc')->get();

    return response()->json($rotas, 200);
   }
    public function show(Rota $rota)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rota  $rota
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rota $rota)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rota  $rota
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rota $rota)
    {
        //
    }
}
