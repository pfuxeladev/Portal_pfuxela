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
            ['tipo_combustivel'=>'Gasolina', 'preco_actual'=>83.3],
            ['tipo_combustivel'=>'Diesel', 'preco_actual'=>70.970]
        ];

        foreach ($combustivel as $key => $c) {
            combustivel::updateOrCreate($c);
        }

    }
}
