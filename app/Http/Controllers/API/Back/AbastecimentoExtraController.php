<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Http\Requests\ExtraOrderRequest;
use App\Models\Ordem;
use Illuminate\Http\Request;
use App\Interfaces\ExtraOrderInterface;
use Response;
use Illuminate\Http\JsonResponse;

class AbastecimentoExtraController extends Controller
{
   private $extraOrder;

   function __construct(ExtraOrderInterface $extraOrder){
    $this->extraOrder = $extraOrder;
   }
    public function index()
    {
        return $this->extraOrder->ListAll();
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExtraOrderRequest $request)
    {
        return $this->extraOrder->CreateOrder($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ordem  $ordem
     * @return \Illuminate\Http\Response
     */
    public function show($ordem):JsonResponse
    {
        return Response::json($this->extraOrder->viewExternalOrder($ordem), 200);
    }

    public function ApproveOrder($ordem){

    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ordem  $ordem
     * @return \Illuminate\Http\Response
     */
    public function edit(Ordem $ordem)
    {
        //
    }

    public function update(Request $request, Ordem $ordem)
    {
        //
    }
}
