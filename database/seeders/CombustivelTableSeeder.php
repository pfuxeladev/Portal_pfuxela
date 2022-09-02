<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\combustivel;
class CombustivelTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $combustivel = [
<<<<<<< HEAD
            ['tipo_combustivel'=>'Gasolina', 'preco_actual'=>83.3],
            ['tipo_combustivel'=>'Diesel', 'preco_actual'=>70.970]
=======
            ['tipo_combustivel'=>'Gasolina'],
            ['tipo_combustivel'=>'Diesel'],
            ['tipo_combustivel'=>'Gas']
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
        ];

        foreach ($combustivel as $key => $c) {
            combustivel::updateOrCreate($c);
        }

    }
}
