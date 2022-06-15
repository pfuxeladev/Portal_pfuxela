<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Empresa;
use App\Models\Contactos;
use App\Models\Departamento;
use App\Models\Person;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Empresa = Empresa::create([
            'nome_empresa'=>'Pfuxela Exhibiton Gallery',
            'email_empresa'=>'info@corporategifts.co.mz',
            'endereco_empresa'=>'Av. Paulo Samuel Kankhomba, nr 2164, Malhangalene-Maputo',
            'tipo_empresa'=>'Transporte e logistica',
            'site_empresa'=>'https://www.corporategifts.co.mz/'
        ]);
        if($Empresa){
            $contactos = Contactos::create([
                'cont_type'=> 'mobile',
                'content'=>'+258 841000170',
                'empresa_id'=>$Empresa->id
            ]);

            $department_array = [
                ['nome'=>'RH', 'descricao'=>'Departamento de Recursos Humanos'],
                ['nome'=>'Comercial', 'descricao'=>'Departamento Comercial'],
                ['nome'=>'Oficinas', 'descricao'=>'Departamento responsavel pela gestao de Oficinas'],
                ['nome'=>'Contabilidade e Finanças', 'descricao'=>'Departamento da Contabilidade e Finanças'],
                ['nome'=>'Comercial - Corporate Gifts', 'descricao'=>'Departamento Comercial - Corporate Gifts'],
                ['nome'=>'Tecnologias de Informação', 'descricao'=>'Departamento da Tecnologias de Informação'],
                ['nome'=>'Transportes', 'descricao'=>'Sector de Transportes'],
                ['nome'=>'Procurement', 'descricao'=>'Departamento de Procurement'],
                ['nome'=>'Marketing e Vendas', 'descricao'=>'Departamento Marketing e Vendas'],
                ['nome'=>'Logistica', 'descricao'=>'Departamento responsavel pela Logistica'],
                ['nome'=>'House Keeping', 'descricao'=>'Departamento House Keeping'],
                ['nome'=>'Geral', 'descricao'=>'Direcao Geral'],
                ['nome'=>'Direcção', 'descricao'=>'Direcção'],
                ['nome'=>'Criativo', 'descricao'=>'Departamento Criativo'],
                ['nome'=>'Armazem', 'descricao'=>'Departamento Armazem'],
                ['nome'=>'Suporte de Escritório', 'descricao'=>'Departamento Suporte de Escritório'],
                ['nome'=>'Transportes', 'descricao'=>'Departamento responsavel pelos Transportes'],
            ];
            foreach ($department_array as $key => $x) {
            $departamento = Departamento::updateOrCreate($x);
                $Empresa->departamento()->attach([$departamento->id]);
            }

            $pessoa = new Person();

            $pessoa->nome_completo = "Leonel Antonio Chihale";
            $pessoa->apelido = "Chihale";
            $pessoa->NUIT = "1002229331";
            $pessoa->endereco = "Machava socimol, Maputo-mz";
            $pessoa->genero = "masculino";
            $pessoa->cargo = "Tecnico informatico";
            $pessoa->carreira = "Programador fullstack";
            $pessoa->empresa()->associate($Empresa->id);
            $pessoa->save();

            $departamento = Departamento::where('nome', 'Direcção')->first();

             $user = new User();
             $user->email = "supportdesk@pfuxela.co.mz";
             $user->name = "Leonel Antonio Chihale";
             $user->password = Hash::make("admin@support");
             $user->is_active = true;
             $user->remember_token = Str::random(10);
             $user->departamento()->associate($departamento->id);
             $user->person()->associate($pessoa->id);
             $user->save();

        }

    }
}
