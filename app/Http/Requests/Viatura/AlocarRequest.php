<?php

namespace App\Http\Requests\Viatura;

use Illuminate\Foundation\Http\FormRequest;

class AlocarRequest extends FormRequest
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
           'viatura_id'=>'required|integer|min:1',
           'kmPercorridos'=>'required|numeric|min:1',
           'manometro_combustivel'=>'required',
           'motorista_id'=>'required|integer|min:1',
           'manometro_km'=>'required|numeric|min:1',
           'rota'=> [
            'required',
            'array', // input must be an array
            'min:1'],
        //    'rota.rota_id'=>'required'
        ];
    }
}
