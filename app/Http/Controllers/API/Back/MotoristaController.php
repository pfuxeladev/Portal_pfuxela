<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\Contactos;
use App\Models\motorista;
use App\Models\Person;
use Illuminate\Http\Request;

class MotoristaController extends Controller
{
    private $motorista;

    function __construct(motorista $motorista)
    {
        $this->motorista = $motorista;
    }
    public function index()
    {
        return $this->motorista->with(['person'])->orderBy('created_at', 'desc')->paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

<<<<<<< HEAD
       
=======
        $request->validate([
            'cartaConducao' => 'required|string|min:5',
            'nr_documento' => 'required|string|min:9',
        ]);
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033

        $motorista = new motorista();


        $people = new Person();

        $people->nome_completo = $request->nome;
        $people->apelido = $request->apelido;
        $people->data_nascimento = $request->data_nascimento;
        $people->NUIT = $request->NUIT;
        $people->endereco = $request->endereco;
        $people->empresa_id = 1;
        $people->cargo = $request->cargo;
        $people->save();

        if ($people) {
            $contact = new Contactos();
<<<<<<< HEAD
            $contact->cont_type = 'mobile';
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
            $contact->content = $request->contacto;
            $contact->person_id = $people->id;
            $contact->save();
            if ($contact) {
                $contact1 = new Contactos();
<<<<<<< HEAD
                $contact1->cont_type = 'mobile';
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
                $contact1->content = $request->contacto_alt;
                $contact1->person_id = $people->id;
                $contact1->save();
            }

            $motorista->carta_conducao = $request->cartaConducao;
            $motorista->doc_type = $request->doc_type;
            $motorista->nr_documento = $request->nr_documento;
            $motorista->person_id = $people->id;
            $motorista->save();
        }
        return response()->json(['message' => 'Motorista criado com sucesso'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\motorista  $motorista
     * @return \Illuminate\Http\Response
     */
    public function show(motorista $motorista)
    {
        return $this->motorista->findOrFail($motorista);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\motorista  $motorista
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, motorista $motorista)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\motorista  $motorista
     * @return \Illuminate\Http\Response
     */
    public function destroy(motorista $motorista)
    {
        //
    }
}
