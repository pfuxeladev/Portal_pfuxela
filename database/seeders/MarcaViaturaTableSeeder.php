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
          array('id' =>1 , 'nome' => 'Acura' ,'code' => 'ACURA'),
          array('id' =>2 , 'nome' => 'Alfa Romeo' ,'code' => 'ALFA'),
          array('id' =>3 , 'nome' => 'AMC' ,'code' => 'AMC'),
          array('id' =>4 , 'nome' => 'Aston Martin' ,'code' => 'ASTON'),
          array('id' =>5 , 'nome' => 'Audi' ,'code' => 'AUDI'),
          array('id' =>6 , 'nome' => 'Avanti' ,'code' => 'AVANTI'),
          array('id' =>7 , 'nome' => 'Bentley' ,'code' => 'BENTL'),
          array('id' =>8 , 'nome' => 'BMW' ,'code' => 'BMW'),
          array('id' =>9 , 'nome' => 'Buick' ,'code' => 'BUICK'),
          array('id' =>10 , 'nome' => 'Cadillac' ,'code' => 'CAD'),
          array('id' =>11 , 'nome' => 'Chevrolet' ,'code' => 'CHEV'),
          array('id' =>12 , 'nome' => 'Chrysler' ,'code' => 'CHRY'),
          array('id' =>13 , 'nome' => 'Daewoo' ,'code' => 'DAEW'),
          array('id' =>14 , 'nome' => 'Daihatsu' ,'code' => 'DAIHAT'),
          array('id' =>15 , 'nome' => 'Datsun' ,'code' => 'DATSUN'),
          array('id' =>16 , 'nome' => 'DeLorean' ,'code' => 'DELOREAN'),
          array('id' =>17 , 'nome' => 'Dodge' ,'code' => 'DODGE'),
          array('id' =>18 , 'nome' => 'Eagle' ,'code' => 'EAGLE'),
          array('id' =>19 , 'nome' => 'Ferrari' ,'code' => 'FER'),
          array('id' =>20 , 'nome' => 'FIAT' ,'code' => 'FIAT'),
          array('id' =>21 , 'nome' => 'Fisker' ,'code' => 'FISK'),
          array('id' =>22 , 'nome' => 'Ford' ,'code' => 'FORD'),
          array('id' =>23 , 'nome' => 'Freightliner' ,'code' => 'FREIGHT'),
          array('id' =>24 , 'nome' => 'Geo' ,'code' => 'GEO'),
          array('id' =>25 , 'nome' => 'GMC' ,'code' => 'GMC'),
          array('id' =>26 , 'nome' => 'Honda' ,'code' => 'HONDA'),
          array('id' =>27 , 'nome' => 'HUMMER' ,'code' => 'AMGEN'),
          array('id' =>28 , 'nome' => 'Hyundai' ,'code' => 'HYUND'),
          array('id' =>29 , 'nome' => 'Infiniti' ,'code' => 'INFIN'),
          array('id' =>30 , 'nome' => 'Isuzu' ,'code' => 'ISU'),
          array('id' =>31 , 'nome' => 'Jaguar' ,'code' => 'JAG'),
          array('id' =>32 , 'nome' => 'Jeep' ,'code' => 'JEEP'),
          array('id' =>33 , 'nome' => 'Kia' ,'code' => 'KIA'),
          array('id' =>34 , 'nome' => 'Lamborghini' ,'code' => 'LAM'),
          array('id' =>35 , 'nome' => 'Lancia' ,'code' => 'LAN'),
          array('id' =>36 , 'nome' => 'Land Rover' ,'code' => 'ROV'),
          array('id' =>37 , 'nome' => 'Lexus' ,'code' => 'LEXUS'),
          array('id' =>38 , 'nome' => 'Lincoln' ,'code' => 'LINC'),
          array('id' =>39 , 'nome' => 'Lotus' ,'code' => 'LOTUS'),
          array('id' =>40 , 'nome' => 'Maserati' ,'code' => 'MAS'),
          array('id' =>41 , 'nome' => 'Maybach' ,'code' => 'MAYBACH'),
          array('id' =>42 , 'nome' => 'Mazda' ,'code' => 'MAZDA'),
          array('id' =>43 , 'nome' => 'McLaren' ,'code' => 'MCLAREN'),
          array('id' =>44 , 'nome' => 'Mercedes-Benz' ,'code' => 'MB'),
          array('id' =>45 , 'nome' => 'Mercury' ,'code' => 'MERC'),
          array('id' =>46 , 'nome' => 'Merkur' ,'code' => 'MERKUR'),
          array('id' =>47 , 'nome' => 'MINI' ,'code' => 'MINI'),
          array('id' =>48 , 'nome' => 'Mitsubishi' ,'code' => 'MIT'),
          array('id' =>49 , 'nome' => 'Nissan' ,'code' => 'NISSAN'),
          array('id' =>50 , 'nome' => 'Oldsmobile' ,'code' => 'OLDS'),
          array('id' =>51 , 'nome' => 'Peugeot' ,'code' => 'PEUG'),
          array('id' =>52 , 'nome' => 'Plymouth' ,'code' => 'PLYM'),
          array('id' =>53 , 'nome' => 'Pontiac' ,'code' => 'PONT'),
          array('id' =>54 , 'nome' => 'Porsche' ,'code' => 'POR'),
          array('id' =>55 , 'nome' => 'RAM' ,'code' => 'RAM'),
          array('id' =>56 , 'nome' => 'Renault' ,'code' => 'REN'),
          array('id' =>57 , 'nome' => 'Rolls-Royce' ,'code' => 'RR'),
          array('id' =>58 , 'nome' => 'Saab' ,'code' => 'SAAB'),
          array('id' =>59 , 'nome' => 'Saturn' ,'code' => 'SATURN'),
          array('id' =>60 , 'nome' => 'Scion' ,'code' => 'SCION'),
          array('id' =>61 , 'nome' => 'smart' ,'code' => 'SMART'),
          array('id' =>62 , 'nome' => 'SRT' ,'code' => 'SRT'),
          array('id' =>63 , 'nome' => 'Sterling' ,'code' => 'STERL'),
          array('id' =>64 , 'nome' => 'Subaru' ,'code' => 'SUB'),
          array('id' =>65 , 'nome' => 'Suzuki' ,'code' => 'SUZUKI'),
          array('id' =>66 , 'nome' => 'Tesla' ,'code' => 'TESLA'),
          array('id' =>67 , 'nome' => 'Toyota' ,'code' => 'TOYOTA'),
          array('id' =>68 , 'nome' => 'Triumph' ,'code' => 'TRI'),
          array('id' =>69 , 'nome' => 'Volkswagen' ,'code' => 'VOLKS'),
          array('id' =>70 , 'nome' => 'Volvo' ,'code' => 'VOLVO'),
          array('id' =>71 , 'nome' => 'Yugo' ,'code' => 'YUGO'),
        ];

        foreach ($array as $key => $m) {
            marca::updateOrCreate($m);
        }
    }
}
