<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\marca;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FabricanteController extends Controller
{
   private $marca;
   function __construct(marca $marca)
   {
    $this->marca = $marca;
   }
    public function index()
    {
        return $this->marca->with('viatura', 'modelo')->orderBy('id','desc')->paginate(15);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'nome_marca'=>'required|string',
            'pais_marca'=>'required|string'
        ]);

      $marca =   $this->marca->create([
            'nome_marca'=>$request->nome_marca,
            'pais_marca'=>$request->pais_marca,
            'createdBy'=>auth()->user()->id
        ]);

        return Response::json($marca);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\marca  $marca
     * @return \Illuminate\Http\Response
     */
    public function show(marca $marca)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\marca  $marca
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, marca $marca)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\marca  $marca
     * @return \Illuminate\Http\Response
     */
    public function destroy(marca $marca)
    {
        //
    }
}
