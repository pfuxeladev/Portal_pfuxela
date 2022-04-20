<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProdutosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->string('nome_producto');
            $table->string('descricao_producto');
            $table->integer('massa_unit');
            $table->string('unidade_medida');
            $table->dateTime('prazo');
            $table->foreignIdFor(\App\Models\Categoria::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(\App\Models\marca::class)->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(App\Models\Modelo::class)->nullable()->constrained();
            $table->unsignedBigInteger('createdBy');
            $table->foreign('createdBy')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('produtos');
    }
}
