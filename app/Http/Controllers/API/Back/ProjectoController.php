<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\ordem_viatura;
use App\Models\OrdemViaturaRota;
use App\Models\projecto;
use App\Models\Rota;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
class ProjectoController extends Controller
{
   private $projecto;

   function __construct(projecto $projecto)
   {
    $this->projecto = $projecto;
   }
    public function index()
    {
        return $this->projecto->orderBy('name', 'desc')->paginate(10);
    }

    function listProjecto()
    {
        return projecto::all();
    }
    public function store(Request $request)
    {
     $projecto = array();
     $api_resource = Http::get('http://clientes.pfuxela.co.mz/api/allProjects')->json();
     foreach ($api_resource['data'] as $key => $project) {
         $key++;

         $projecto = projecto::firstOrNew(
             ['id'=>$project['id'],
             'name'=>$project['name'],
             'email'=>$project['email'],
             'telephone'=>$project['telephone'],
             'address_xtense'=>$project['address_xtense'],
             'contact_emg'=>$project['contact_emg'],
             'nrPassagers'=>$project['nrPassagers'],
             'recomendation'=>$project['recomendation'],
             'createdBy'=>auth()->user()->id,
             'updatedBy'=>auth()->user()->id,
             ]
           );
     }
     return $projecto;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\projecto  $projecto
     * @return \Illuminate\Http\Response
     */
    public function show($name)
    {
       $projecto = $this->projecto->with(['rota'])->where('name', $name)->first();




       return response()->json($projecto, 200);
    }

   protected function RelatorioProjecto(Request $request, $name){

    if($request->q){
         $rotas = Rota::with(['ordem_viatura.ordem.bombas', 'ordem_viatura.viatura', 'ordem_viatura.ordem.approvedBy'])->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')->join('ordem_viatura_rotas', 'rotas.id', '=', 'ordem_viatura_rotas.rota_id')
    ->join('ordem_viaturas', 'ordem_viatura_rotas.ordem_viatura_id', '=', 'ordem_viaturas.id')
    ->where('projectos.name', $name)->select('rotas.id', 'rotas.nome_rota')
    ->where('rotas.nome_rota','like', '%' . $request->q . '%')
    ->addSelect(DB::raw('sum(ordem_viaturas.preco_cunsumo) AS total_order'), DB::raw('sum(ordem_viaturas.qtd_abastecida) as total_abastecido'))
    ->groupBy(['rotas.id', 'rotas.nome_rota'])
    // ->orderBy('ordem_viaturas.updated_at', 'desc')
    ->paginate(10);

    return response()->json($rotas, 200);

    }else if($request->perPage){
         $rotas = Rota::with(['ordem_viatura.ordem.bombas', 'ordem_viatura.viatura', 'ordem_viatura.ordem.approvedBy'])->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')->join('ordem_viatura_rotas', 'rotas.id', '=', 'ordem_viatura_rotas.rota_id')
    ->join('ordem_viaturas', 'ordem_viatura_rotas.ordem_viatura_id', '=', 'ordem_viaturas.id')->where('projectos.name', $name)->select('rotas.id', 'rotas.nome_rota')
    ->addSelect(DB::raw('sum(ordem_viaturas.preco_cunsumo) AS total_order'), DB::raw('sum(ordem_viaturas.qtd_abastecida) as total_abastecido'))
    ->groupBy(['rotas.id', 'rotas.nome_rota'])
    // ->orderBy('ordem_viaturas.updated_at', 'desc')
    ->paginate($request->perPage);

    return response()->json($rotas, 200);

    }else if($request->q && $request->perPage){
         $rotas = Rota::with(['ordem_viatura.ordem.bombas', 'ordem_viatura.viatura', 'ordem_viatura.ordem.approvedBy'])->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')->join('ordem_viatura_rotas', 'rotas.id', '=', 'ordem_viatura_rotas.rota_id')
    ->join('ordem_viaturas', 'ordem_viatura_rotas.ordem_viatura_id', '=', 'ordem_viaturas.id')->where('projectos.name', $name)->select('rotas.id', 'rotas.nome_rota')
    ->where('rotas.nome_rota','like', '%' . $request->q . '%')
    ->addSelect(DB::raw('sum(ordem_viaturas.preco_cunsumo) AS total_order'), DB::raw('sum(ordem_viaturas.qtd_abastecida) as total_abastecido'))
    ->groupBy(['rotas.id', 'rotas.nome_rota'])
    // ->orderBy('ordem_viaturas.updated_at', 'desc')
    ->paginate($request->perPage);

    return response()->json($rotas, 200);

    }else{
         $rotas = Rota::with(['ordem_viatura.ordem.bombas', 'ordem_viatura.viatura', 'ordem_viatura.ordem.approvedBy'])->join('projectos', 'rotas.projecto_id', '=', 'projectos.id')->join('ordem_viatura_rotas', 'rotas.id', '=', 'ordem_viatura_rotas.rota_id')
    ->join('ordem_viaturas', 'ordem_viatura_rotas.ordem_viatura_id', '=', 'ordem_viaturas.id')->where('projectos.name', $name)->select('rotas.id', 'rotas.nome_rota')
    ->addSelect(DB::raw('sum(ordem_viaturas.preco_cunsumo) AS total_order'), DB::raw('sum(ordem_viaturas.qtd_abastecida) as total_abastecido'))
    ->groupBy(['rotas.id', 'rotas.nome_rota'])
    // ->orderBy('ordem_viaturas.updated_at', 'desc')
    ->paginate(10);

    return response()->json($rotas, 200);
    }

   }
    public function update(Request $request, projecto $projecto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\projecto  $projecto
     * @return \Illuminate\Http\Response
     */
    public function destroy(projecto $projecto)
    {
        //
    }
}
