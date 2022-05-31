<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRequisicaosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('requisicaos', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(App\Models\Fornecedor::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(\App\Models\Departamento::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('finalidade');
            $table->foreignIdFor(\App\Models\Empresa::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('tipo_pagamento')->nullable();
            $table->string('tipo_moeda');
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
        Schema::dropIfExists('requisicaos');
    }
}
