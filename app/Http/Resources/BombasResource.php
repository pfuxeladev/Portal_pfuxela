<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BombasResource extends JsonResource
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
            'nome_bombas'=>$this->nome_bombas,
            'tipo_bomba'=>$this->tipo_bomba,
            'status'=>$this->status,
        ];
    }
}
