<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RotaRequest extends FormRequest
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
            'nome_rota' => 'required|string',
            'projecto_id' => 'required|integer',
            'tipoRota' => 'required|string',
            'endereco' => 'required|string',
            'distancia_km' => 'required|numeric'

        ];
    }
}
