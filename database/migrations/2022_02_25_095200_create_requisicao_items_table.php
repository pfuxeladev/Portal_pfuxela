<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequisicaoItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisicao_items', function (Blueprint $table) {
            $table->id();
            $table->string('nome_item');
            $table->decimal('preco_item');
            $table->decimal('quantidade_item');
            $table->string('unit_medida')->nullable();
            $table->double('preco_iva')->default(0);
            $table->double('total_item');
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
        Schema::dropIfExists('requisicao_items');
    }
}
