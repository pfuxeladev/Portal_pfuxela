<?php

use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbastecimentoViaturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abastecimento_viaturas', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('qtd_anterior');
            $table->integer('qtd_rec');
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
        Schema::dropIfExists('abastecimento_viaturas');
    }
}
