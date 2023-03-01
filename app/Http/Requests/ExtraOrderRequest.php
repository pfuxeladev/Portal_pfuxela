<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExtraOrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'viatura_matricula'=>'required',
            'motorista_id'=>'required',
            'destino'=>'required',
            'descricao'=>'required|string',
            'finalidade'=>'required',
            'qtd'=>'required|integer|min:1',
            'horaSaida'=>'required',
            'bombas_id'=>'required',
        ];
    }
}
