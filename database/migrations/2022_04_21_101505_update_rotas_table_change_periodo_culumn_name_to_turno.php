<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateRotasTableChangePeriodoCulumnNameToTurno extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('rotas', function (Blueprint $table) {
            $table->dropColumn('periodo');
            $table->string('turno')->after('pontos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('rotas', function (Blueprint $table) {
            //
        });
    }
}
