<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateRotasTableDropPontosColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rotas', function(Blueprint $table){
            $table->dropColumn('pontos');
        });

        Schema::table('abastecimento_rotas', function(Blueprint $table){
            $table->dropColumn('qtd');
        });

    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
