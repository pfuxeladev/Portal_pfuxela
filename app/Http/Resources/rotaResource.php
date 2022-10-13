<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class rotaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'nome_rota' => $request->nome_rota,
            'projecto_id' => $request->projecto_id,
            'tipoRota' => $request->tipoRota,
            'endereco' => $request->endereco,
            'distancia_km' => $request->distancia_km
        ];
    }
}
