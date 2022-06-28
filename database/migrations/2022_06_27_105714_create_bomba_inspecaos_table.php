<?php

use App\Models\Bombas;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBombaInspecaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bomba_inspecaos', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Bombas::class)->constrained();
            $table->foreignIdFor(User::class)->constrained();
            $table->bigInteger('Qtd_actual');
            $table->string('leitura_fisica');
            $table->bigInteger('leitura_manometro')->nullable();
            $table->string('estado')->nullable();
            $table->text('observacao')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bomba_inspecaos');
    }
}
