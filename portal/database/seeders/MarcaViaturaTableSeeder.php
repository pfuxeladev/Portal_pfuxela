<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\marca;
class MarcaViaturaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = [
            ['nome'=>'Alfa Romeo'],
            ['nome'=>'Alpine'],
            ['nome'=>'Audi'],
            ['nome'=>'Alpine'],
            ['nome'=>'Bentley'],
            ['nome'=>'BMW'],
            ['nome'=>'Citroen'],
            ['nome'=>'Cupra'],
            ['nome'=>'Chevrolet'],
            ['nome'=>'Dacia'],
            ['nome'=>'DS'],
            ['nome'=>'Fiat'],
            ['nome'=>'Ford'],
            ['nome'=>'Honda'],
            ['nome'=>'Hyunday'],
            ['nome'=>'Jaguar'],
            ['nome'=>'Jeep'],
            ['nome'=>'Hammer'],
            ['nome'=>'Kia'],
            ['nome'=>'Land Rover'],
            ['nome'=>'Lexus'],
            ['nome'=>'Mazda'],
            ['nome'=>'Mercedes-Benz'],
            ['nome'=>'MG'],
            ['nome'=>'MINI'],
            ['nome'=>'MITSUBISHI'],
            ['nome'=>'Nissan'],
            ['nome'=>'Peugeot'],
            ['nome'=>'Renault'],
            ['nome'=>'SEAST'],
            ['nome'=>'Skoda'],
            ['nome'=>'Smart'],
            ['nome'=>'Susuki'],
            ['nome'=>'Toyota'],
            ['nome'=>'Volkswagen'],
            ['nome'=>'Volvo'],
            ['nome'=>'Opel'],
            ['nome'=>'']
        ];

        foreach ($array as $key => $m) {
            marca::updateOrCreate($m);
        }
    }
}
