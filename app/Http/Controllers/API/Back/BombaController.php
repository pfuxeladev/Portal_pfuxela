<?php

namespace App\Http\Controllers\API\BACK;

use App\Http\Controllers\Controller;
use App\Models\Bombas;
use App\Models\combustivel;
use App\Models\combustivelBomba;
use App\Models\responsavelBombas;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BombaController extends Controller
{
    private $bombas;

    function __construct(Bombas $bombas)
    {
        $this->bombas = $bombas;
    }
    public function index()
    {
        return Bombas::with(['responsavel', 'createdBy', 'combustivel'])->get();
    }

    function fetchCombustivel()
    {
        return combustivel::all();
    }

    function updtFuel(Request $request)
    {
        foreach ($request->all() as $val) {
            combustivel::where(['tipo_combustivel' => $val['tipo_combustivel']])->update([
                'tipo_combustivel' => $val['tipo_combustivel'],
                'preco_actual' => $val['preco_actual']
            ]);
        }
        return response()->json(['success' => 'actualizado com sucesso'], 200);
    }
    public function store(Request $request)
    {
        // $uuid = Str::uuid()->toString();

        $responsavel = new responsavelBombas();
        $this->validate(
            $request,
            [
                'nome_bombas' => 'required|string',
                'capacidade' => 'required| string',
                'tipo_bomba' => 'required|string',
                'responsavel' => 'required|array|min:1',
                'responsavel*nome' => 'required|string',
                'responsavel*email_bomba' => 'required|string|email', 'max:255', 'unique:responsavel_bombas',
                'responsavel*contacto' => 'required|string',
                'responsavel*combustivel_tipos' => 'required',

            ],
            [
                'required' => 'O campo :attribute &eacute; obrigat&oacute;rio',
                'unique' => 'O :attribute Ja existe um utilizador cadastrado com esse email'
            ]
        );


        $bombaVerify = Bombas::where('nome_bombas', $request->nome_bombas)->first();
        if (!empty($bombaVerify)) {
            return response()->json(['erro' => 'Erro! ja existe uma bomba cadastrada com esse nome']);
        } else {
            $bombas = $this->bombas->create([
                'nome_bombas' => $request->nome_bombas,
                'capacidade' => $request->capacidade,
                'tipo_bomba' => $request->tipo_bomba,
                'createdBy' => auth()->user()->id,
                // 'updatedBy'=>auth()->user()->id,
            ]);

            if ($bombas) {
                $bomba = Bombas::where('id', $bombas->id)->first();

                foreach ($request->responsavel as $key => $resp) {
                    $responsavel = responsavelBombas::create([
                        'nome' => $resp['nome'],
                        'email_bomba' => $resp['email_bomba'],
                        'contacto' => $resp['contacto'],
                        'contacto_alt' => $resp['contacto_alt'],
                        'bombas_id' => $bomba->id,
                        'createdBy' => auth()->user()->id,
                        'updatedBy' => auth()->user()->id,
                    ]);
                }

                $combustivel = array();
                foreach ($request->combustivel_tipos as $key => $comb) {

                    $combustivel[$key] = combustivel::where('tipo_combustivel', $comb)->get();

                    foreach ($combustivel[$key] as $key => $c) {

                        combustivelBomba::create(['bomba_id' => $bombas->id, 'combustivel_id' => $c->id, 'preco_atual' => $c->preco_actual]);
                    }
                }

                if ($responsavel) {
                    return response()->json(['message' => 'cadastrou a bomba com sucesso']);
                }
            }
        }
    }

    function adicionarResponsavel(Request $request)
    {
        $responsavel = new responsavelBombas();
        $responsavel->bomba()->associate($request->bomba_id);
        $responsavel->nome = $request->nome;
        $responsavel->email_bomba = $request->email_bomba;
        $responsavel->contacto = $request->contacto;
        $responsavel->contacto_alt = $request->contacto_alt;
        $responsavel->save();
    }
    public function show(Bombas $bombas)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Bombas  $bombas
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $uuid = Str::uuid()->toString();

        $responsavel = new responsavelBombas();
        $this->validate(
            $request,
            [
                'nome_bombas' => 'required|string',
                'capacidade' => 'required| string',
                'tipo_bomba' => 'required|string',
                'responsavel' => 'required|array|min:1',
                'responsavel*nome' => 'required|string',
                'responsavel*email_bomba' => 'required|string|email', 'max:255', 'unique:responsavel_bombas',
                'responsavel*contacto' => 'required|string',
                'responsavel*combustivel_tipos' => 'required',

            ],
            [
                'required' => 'O campo :attribute &eacute; obrigat&oacute;rio',
                'unique' => 'O :attribute Ja existe um utilizador cadastrado com esse email'
            ]
        );



        $bombas = Bombas::where('id', $id)->update([
            'nome_bombas' => $request->nome_bombas,
            'capacidade' => $request->capacidade,
            'tipo_bomba' => $request->tipo_bomba,
            'createdBy' => auth()->user()->id,
            // 'updatedBy'=>auth()->user()->id,
        ]);
        if ($bombas) {
            // $bomba = Bombas::where('id', $bombas->id)->first();

            foreach ($request->responsavel as $key => $resp) {
                $responsavel = responsavelBombas::firstOrCreate([
                    'nome' => $resp['nome'],
                    'email_bomba' => $resp['email_bomba'],
                    'contacto' => $resp['contacto'],
                    'contacto_alt' => $resp['contacto_alt'],
                    'bombas_id' => $id,
                    'createdBy' => auth()->user()->id,
                    'updatedBy' => auth()->user()->id,
                ]);
            }

            $combustivel = array();
            foreach ($request->combustivel_tipos as $key => $comb) {

                $combustivel[$key] = combustivel::where('tipo_combustivel', $comb)->get();

                foreach ($combustivel[$key] as $key => $c) {

                    combustivelBomba::updateOrCreate(['bomba_id' => $id, 'combustivel_id' => $c->id, 'preco_actual' => $c->preco_actual]);
                }
            }

            if ($responsavel) {
                return response()->json(['message' => 'Actualizou a bomba com sucesso']);
            }
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Bombas  $bombas
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bombas $bombas)
    {
        //
    }
}
