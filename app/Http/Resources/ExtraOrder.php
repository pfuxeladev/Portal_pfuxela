<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ExtraOrder extends JsonResource
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
            'bombas'=>$this->when($this->nome_bombas()->exists(), function () {
                return BombasResource::collection($this->nome_bombas);
            }),
            'refs'=>$this->refs,
            'codigo_ordem'=>$this->codigo_ordem,
            'tipo_ordem'=>$this->tipo_ordem,
            'estado'=>$this->estado,
            'createdBy'=>$this->when($this->name()->exists(), function () {
                return UserResource::collection($this->name);
            }),
            'updatebBy'=>$this->when($this->name()->exists(), function () {
                return UserResource::collection($this->name);
            }),
            'abastecimento'=>$this->abastecimento,

            'viatura'=>$this->when($this->viatura()->exists(), function () {
                return ViaturaResource::collection($this->viatura);
            }),
        ];
    }
}
