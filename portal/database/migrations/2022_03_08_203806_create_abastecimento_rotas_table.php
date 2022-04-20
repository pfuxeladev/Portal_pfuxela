<?php

use App\Models\Ordem;
use App\Models\Rota;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbastecimentoRotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abastecimento_rotas', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Ordem::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Rota::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('qtd');
            $table->string('razao_abastecimento');
            $table->string('turno');
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
        Schema::dropIfExists('abastecimento_rotas');
    }
}
