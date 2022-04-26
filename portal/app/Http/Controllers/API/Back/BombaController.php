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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
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


            foreach ($request->combustivel_tipos as $key => $comb) {
                $combustivel = combustivel::where('tipo_combustivel', $comb)->get();
                foreach ($combustivel as $key => $c) {
                    $conustivel_bombas = combustivelBomba::create(['bomba_id' => $bombas->id, 'combustivel_id' => $c->id]);
                }
            }

            if ($responsavel) {
                return response()->json(['message' => 'cadastrou a bomba com sucesso']);
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
            $bomba = Bombas::where('id', $id)->first();

            foreach ($request->responsavel as $key => $resp) {
                $responsavel = responsavelBombas::where('bombas_id', $id)->update([
                    'nome' => $resp['nome'],
                    'email_bomba' => $resp['email_bomba'],
                    'contacto' => $resp['contacto'],
                    'contacto_alt' => $resp['contacto_alt'],
                    'bombas_id' => $bomba->id,
                    'createdBy' => auth()->user()->id,
                    'updatedBy' => auth()->user()->id,
                ]);
            }

            if ($request->tipo_combustivel != null) {

                foreach ($request->combustivel_tipos as $key => $comb) {
                    $combustivel = combustivel::where('tipo_combustivel', $comb)->get();
                    foreach ($combustivel as $key => $c) {
                        $conustivel_bombas = combustivelBomba::updateOrCreate(['bomba_id' => $id, 'combustivel_id' => $c->id]);
                    }
                }
            }

            if ($responsavel) {
                return response()->json(['message' => 'actualizou a bomba com sucesso']);
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
