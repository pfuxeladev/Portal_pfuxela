<?php

namespace App\Http\Controllers\API\Back;

use App\Http\Controllers\Controller;
use App\Models\Ordem;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
class OrdemController extends Controller
{
   private $ordem;

   function __construct(Ordem $ordem)
   {
       $this->ordem = $ordem;
   }
    public function index()
    {
        return $this->ordem->with(['bombas', 'viatura'])->orderBy('id', 'desc')->paginate(15);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ordem = new Ordem();
            $counter = 10000;
            $uuid = Str::uuid()->toString();

            $last_order = Ordem::latest()->first();
            if (!empty($last_order)) {
                $new_code = ($last_order->codigo_ordem + 1);
                $ordem->codigo_ordem = $new_code;
            } else {
                $ordem->codigo_ordem = $counter;
            }
            $ordem->refs = $uuid;
            $ordem->bombas_id = $request->bombas_id;
            $ordem->createdBy = auth()->user()->id;
            $ordem->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ordem  $ordem
     * @return \Illuminate\Http\Response
     */
    public function show(Ordem $ordem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ordem  $ordem
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ordem $ordem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ordem  $ordem
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ordem $ordem)
    {
        //
    }
}
