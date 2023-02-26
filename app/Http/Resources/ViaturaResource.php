<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ViaturaResource extends JsonResource
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
            'id'=>$this->id,
            'matricula'=>$this->matricula,
            'tipo_combustivel'=>$this->tipo_combustivel,
            'capacidade_tanque'=>$this->capacidade_tanque,
            'capacidade_media'=>$this->capacidade_media,
            'nome_viatura'=>$this->nome_viatura
        ];
    }
}
