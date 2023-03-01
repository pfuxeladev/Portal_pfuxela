<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\Bombas;
use App\Models\Ordem;
use App\Models\ordem_viatura;
use App\Models\projecto;
use App\Models\User;
use App\Models\Viatura;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{

    
    public function index()
    {
        $data = array();

        $supplier = Bombas::count();
        $user = User::all()->count(); 
        $vehicles = Viatura::all()->count();
        $customers = projecto::all()->count();

        $order_mount = Ordem::withSum('ordem_viatura', 'preco_cunsumo')->whereMonth('created_at', Carbon::now()->month)->get();

        $customSupplier = [
           [ 'icon'=>'TrendingUpIcon',
            'color'=>'light-primary',
            'title'=>$supplier,
            'subtitle'=>'Fornecedores',
            'customClass'=> 'mb-2 mb-xl-0'],
            [ 'icon'=>'UserCheckIcon',
            'color'=>'light-success',
            'title'=>$user,
            'subtitle'=>'Usuarios',
            'customClass'=> 'mb-2 mb-xl-0'],
            [ 'icon'=>'TruckIcon',
            'color'=>'light-danger',
            'title'=>$vehicles,
            'subtitle'=>'Viaturas',
            'customClass'=>'mb-2 mb-sm-0'],
            [ 'icon'=>'UsersIcon',
            'color'=>'light-info',
            'title'=>$customers,
            'subtitle'=>'Projectos',
            ]

        ];
       
        $data = [
            'statisticsItems'=>$customSupplier,
            'congratulations'=>['name'=>auth()->user()->name, 'saleToday'=>ordem_viatura::whereDay('created_at', Carbon::today())->sum('preco_cunsumo')],
            'companyTable'=>$this->LastFuelOrderSupplies(),
            'users'=>$user,
            'vehicles'=>$vehicles,
            'customers'=>$customers,
            'monthlyOrders'=>$order_mount
        ];


        return response()->json($data, 200);
        
    }

  public function GetStatitcOrders(){

  }

   function LastFuelOrderSupplies(){
        $ordens = Ordem::join('ordem_viaturas', 'ordems.id', '=','ordem_viaturas.ordem_id')->join('viaturas', 'ordem_viaturas.viatura_id', '=', 'viaturas.id')
        ->select('ordems.id as id', 'viaturas.matricula', 'ordem_viaturas.qtd_abastecida', 'ordem_viaturas.preco_cunsumo', 'ordems.codigo_ordem', 'ordems.created_at',      'ordems.tipo_ordem')->orderBy('ordems.updated_at', 'DESC')->take(15)->get();

        return $ordens;
   }
    public function show($id)
    {
        //
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
