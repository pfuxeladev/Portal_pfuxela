<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\Modelo;
use Illuminate\Http\Request;
use App\Models\fabricante;
use App\Models\Viatura;
class ModeloController extends Controller
{
    private $fabricante;
    private $modelo;

    function __construct(Modelo $modelo, fabricante $fabricante)
    {
        $this->modelo = $modelo;
        $this->fabricante = $fabricante;
    }

    public function index()
    {

        return response()->json($this->modelo->with('fabricante')->orderBy('id', 'asc')->get(), 200);
    }

    public function SearchViaturaByModelo(Request $request){
        if ($request->keyword) {
            $data = Viatura::join('modelos', 'viaturas.modelo_id', '=', 'modelos.id')
            ->where('modelos.nome_modelo', 'like', '%' . $request->keyword . '%')
            ->orWhere('modelos.ref_modelo', 'like', '%'.$request->keyword.'%')
            ->orderBy('modelos.nome_modelo', 'desc')
            ->get();

            return response()->json($data, 200);
        }
    }
    public function SearchViaturaByMarca(Request $request){
        if ($request->keyword) {
            $data = Viatura::join('fabricantes', 'viaturas.fabricante_id', '=', 'fabricantes.id')
            ->where('fabricantes.nome_fabricante', 'like', '%' . $request->keyword . '%')
            ->orWhere('fabricantes.pai_fabricante', 'like', '%'.$request->keyword.'%')
            ->orderBy('fabricantes.nome_fabricante', 'desc')
            ->get();

            return response()->json($data, 200);
        }
    }
    public function store(Request $request)
    {
        $modelo = new Modelo();
        $this->validate($request, [
            'nome_modelo'=>'required|string',
            'ref_modelo'=>'required|string|unique:modelos,ref_modelo,except,id',
            'fabricante_id'=>'required|integer|exists:fabricantes,id'
        ]);

        $modelo->nome_modelo = $request->nome_modelo;
        $modelo->ref_modelo = $request->ref_modelo;
        $modelo->fabricante()->associate($request->fabricante_id);
        $modelo->createdBy = auth()->user()->id;
        $modelo->save();


        return $modelo;

    }


    public function show(Modelo $modelo)
    {
        return $this->modelo->with('fabricante')->findOrFail($modelo);
    }


    public function update(Request $request, Modelo $modelo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Modelo  $modelo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Modelo $modelo)
    {
        //
    }
}
