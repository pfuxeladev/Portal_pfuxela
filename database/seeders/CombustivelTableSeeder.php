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
            ['tipo_combustivel'=>'Gasolina'],
            ['tipo_combustivel'=>'Diesel'],
            ['tipo_combustivel'=>'Gas']
        ];

        foreach ($combustivel as $key => $c) {
            combustivel::updateOrCreate($c);
        }

    }
}
