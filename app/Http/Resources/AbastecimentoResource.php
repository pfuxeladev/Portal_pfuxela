<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AbastecimentoResource extends JsonResource
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
            'refs'=>$this->refs,
            'qtd_rec'=>$this->qtd_rec,
            'qtd_ant'=>$this->qtd_ant,
            'user'=>$this->when($this->name()->exists(), function () {
                return UserResource::collection($this->name);
            }),
           

        ];
    }
}
