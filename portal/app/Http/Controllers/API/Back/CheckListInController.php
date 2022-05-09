<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\CheckListIn;
use Illuminate\Http\Request;

class CheckListInController extends Controller
{
    private $checkListIn;

    function __construct(CheckListIn $checkListIn)
    {
        $this->checkListIn = $checkListIn;
    }
    public function index()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CheckListIn  $checkListIn
     * @return \Illuminate\Http\Response
     */
    public function show(CheckListIn $checkListIn)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\CheckListIn  $checkListIn
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CheckListIn $checkListIn)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CheckListIn  $checkListIn
     * @return \Illuminate\Http\Response
     */
    public function destroy(CheckListIn $checkListIn)
    {
        //
    }
}
