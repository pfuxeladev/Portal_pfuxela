<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\projecto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use GuzzleHttp\Client;
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

         $projecto = projecto::updateOrCreate(
             ['id'=>$project['id'],
             'name'=>$project['name'],
             'email'=>$project['email'],
             'telephone'=>$project['telephone'],
             'address_xtense'=>$project['address_xtense'],
             'contact_emg'=>$project['contact_emg'],
             'nrPassagers'=>$project['nrPassagers'],
             'recomendation'=>$project['recomendation']],
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
    public function show(projecto $projecto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\projecto  $projecto
     * @return \Illuminate\Http\Response
     */
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
