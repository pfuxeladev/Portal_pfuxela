<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\anexoViaturas;
use App\Models\combustivel;
use App\Models\marca;
use App\Models\Viatura;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\Modelo;
use App\Models\Ordem;
use App\Models\viaturaDocument;
use Illuminate\Support\Facades\Storage;
class ViaturaController extends Controller
{
    private $viatura;

    function __construct(Viatura $viatura)
    {
        $this->Viatura = $viatura;
    }
    public function index()
    {
        return $this->Viatura->with(['marca', 'modelo', 'createdBy'])->orderBy('id', 'desc')->paginate(15);
    }


    function getCombustivel(){
        return Response::json(combustivel::all(), 200);
    }

    function listViatura(){
        return Viatura::where('estado', true)->orderBy('id', 'desc')->get();
    }
    public function store(Request $request)
    {
        $modelo = new modelo;

        $viatura = new Viatura();

        $todayDate = date('m/d/Y');

        // return $request->documentos;

        $this->validate(
            $request,
            [
                'modelo'=>'required|string',
               'marca_id' =>'required|integer|exists:marcas,id',
                'descricao'=> "required|string|max:300",
                'ano_fabrico'=> "required|numeric|min:1960",
                'kilometragem'=>'required|numeric|min:0',
                'combustivel'=>'required',
                'capacidade_tanque'=>'required|integer|min:1',
                'capacidade_media'=> "required|numeric",
                'lotacao'=> 'required|integer',
                'nr_motor'=> "required",
                'nr_chassi'=> "required",
                'nr_livrete'=> "required",
                'matricula'=> "required",
                'data_licenca'=> "required|date|before_or_equal:" . $todayDate,
                'data_inspencao'=> "required|date|before_or_equal:" . $todayDate,
                'data_manifesto'=> "required|date|before_or_equal:" . $todayDate,
                'data_radio_difusao'=> "required|date|before_or_equal:" . $todayDate,
                'data_seguros'=> "required|date|before_or_equal:" . $todayDate,
                'prazo_licenca'=> "required|date",
                'prazo_inspencao'=> "required|date",
                'prazo_manifesto'=> "required|date",
                'prazo_radio_difusao'=> "required|date",
                'prazo_seguros'=> "required|date",
            ],
            ['required' => ' o campo :attribute e obrigat&oacute;rio', 'integer' => 'O :attribute deve ser um numero inteiro', 'before_or_equal' => 'O campo :attribute deve ser uma data ou anos antes da data actual', 'numeric'=> 'O campo :attribute deve ser valor numerico',]
        );
        $modelo_exists = Modelo::where('nome_modelo',$request->modelo)->first();

        if(!empty($modelo_exists)){
            $viatura->modelo_id = $modelo_exists->id;
        }else{
            $modelo = new Modelo();
            $modelo->marca_id = $request->marca_id;
            $modelo->nome_modelo = $request->modelo;
            $modelo->createdBy = auth()->user()->id;
            $modelo->save();

            $viatura->modelo_id = $modelo->id;
        }


        $combustivel = combustivel::findOrFail($request->combustivel);

        $viatura->matricula = $request->matricula;
        $viatura->nome_viatura = $request->descricao;
        $viatura->ano_fabrico = $request->ano_fabrico;
        $viatura->nr_livrete = $request->nr_livrete;
        $viatura->nr_chassi = $request->nr_chassi;
        $viatura->nr_motor = $request->nr_motor;
        $viatura->capacidade_tanque = $request->capacidade_tanque;
        $viatura->capacidade_media = $request->capacidade_media;
        $viatura->lotacao = $request->lotacao;
        $viatura->kilometragem = $request->kilometragem;
        $viatura->tipo_combustivel = $combustivel->tipo_combustivel;
        $viatura->marca()->associate($request->marca_id);
        $viatura->createdBy = auth()->user()->id;
        // $viatura->updatedBy = auth()->user()->id;
        $viatura->save();
        if ($viatura) {

            $viatura_document = $viatura->viaturaDocument()->firstOrCreate([
                'data_licenca'=>$request->data_licenca,
                'data_inspencao'=>$request->data_inspencao,
                'data_manifesto'=>$request->data_manifesto,
                'data_taxa_radio'=>$request->data_radio_difusao,
                'data_seguros'=>$request->data_seguros,
                'prazo_licenca'=>$request->prazo_licenca,
                'prazo_inspencao'=>$request->prazo_inspencao,
                'prazo_manifesto'=>$request->prazo_manifesto,
                'prazo_taxa_radio'=>$request->prazo_radio_difusao,
                'prazo_seguros'=>$request->prazo_seguros,
            ]);

            foreach ($request->documentos as $key => $images) {

                $extension = $images->getClientOriginalExtension();
                // .jpg .png .pdf

                $filename = time().$images->getClientOriginalName();
                Storage::disk('local')->putFileAs(
                    'viatura_documento/'.$filename,
                    $images,
                    $filename
                  );

               anexoViaturas::create([
                'anexos'=>$filename,
                'tipo_ficheiro'=>$extension,
                'viatura_id'=>$viatura->id
               ]);
            }
            if($viatura_document){
                return response()->json(['success' => 'cadastrado com sucesso']);
            }else{
                return response()->json(['message' => false, 'error' => 'erro na insercao de dados verifique os campos']);
            }

        } else {
            return response()->json(['message' => false, 'error' => 'erro na insercao de dados verifique os campos']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Viatura  $viatura
     * @return \Illuminate\Http\Response
     */
    public function show(Viatura $viatura)
    {
        return $this->viatura->with(['fabricante', 'modelo', 'createdBy'])->findOrFail($viatura);
    }

    function HistoricoAbastecimento($id){
        $abastecimentos = Ordem::with('abastecimento_rota.rota', 'bombas', 'viatura', 'abastecimento')->where('viatura_id', $id)->get();

        return response()->json($abastecimentos, 200);
    }
    public function update(Request $request, $id)
    {
        $viatura = $this->viatura->findOrFail($id);
        $this->validate($request, [
            'modelo_id' => 'required|integer|exists:modelos,id',
            'marca_id' => 'required|integer|exists:fabricantes,id',
            'nome_viatura' => 'required|string',
            'matricula' => 'required|string| unique:viaturas',
            'nr_chassi' => 'required|string| unique:viaturas',
            'nr_motor' => 'required|string| unique:viaturas',
            'ano_fabrico' => 'required|date|before:created_at',
            'capacidade_tanque' => 'required|integer',
            'capacidade_media' => 'required|integer',
            'data_inspencao' => 'required|date|before:created_at',
            'data_manifesto' => 'required|date|before:created_at',
            'data_seguros' => 'required|date|before:created_at',
            'data_licenca' => 'required|date|before:created_at',
            'data_taxa_radio' => 'required|date|before:created_at',
        ]);
        $viatura->matricula = $request->matricula;
        $viatura->nome_viatura = $request->nome_viatura;
        $viatura->nr_chassi = $request->nr_chassi;
        $viatura->nr_motor = $request->nr_motor;
        $viatura->nr_livrete = $request->nr_livrete;
        $viatura->ano_fabrico = $request->ano_fabrico;
        $viatura->capacidade_tanque = $request->capacidade_tanque;
        $viatura->capacidade_media = $request->capacidade_media;
        $viatura->modelo()->associate($request->modelo_id);
        $viatura->fabricante()->associate($request->fabricante_id);
        $viatura->createdBy()->associate(auth()->user()->id);
        $viatura->data_inspencao = $request->data_inspencao;
        $viatura->data_manifesto = $request->data_manifesto;
        $viatura->data_seguros = $request->data_seguros;
        $viatura->data_licenca = $request->data_licenca;
        $viatura->data_taxa_radio = $request->data_taxa_radio;
        $viatura->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Viatura  $viatura
     * @return \Illuminate\Http\Response
     */
    public function destroy(Viatura $viatura)
    {
        //
    }
}
