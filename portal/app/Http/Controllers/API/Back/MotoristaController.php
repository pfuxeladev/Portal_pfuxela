<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\motorista;
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
        return $this->motorista->orderBy('created_at', 'desc')->paginate(10);
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
