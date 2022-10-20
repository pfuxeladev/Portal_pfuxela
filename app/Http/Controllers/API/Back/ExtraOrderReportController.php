<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Http\Services\ExtraOrderService;
use App\Models\Ordem;
use Illuminate\Http\Request;

class ExtraOrderReportController extends Controller
{
    private $service;

    function __construct(ExtraOrderService $service){
        $this->service = $service;
    }
    public function index()
    {
        return $this->service->getWeekReport();

    }


   public function MonthlyExtraOrderReport(){
    return $this->service->getMonthlyReport();
   }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
