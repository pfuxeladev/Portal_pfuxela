<?php

use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateViaturaHistoricosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('viatura_historicos', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->decimal('manometro_km', 8,2)->nullable();
            $table->decimal('manometro_combustivel', 8,2)->nullable();
            $table->unsignedBigInteger('motorista_id')->nullable();
            $table->decimal('qtd_prevista')->nullable();
            $table->decimal('km_percorridos')->nullable();
            $table->decimal('qtd_abastecida');
            $table->boolean('estado')->nullable();
            $table->unsignedBigInteger('created_by_user_id')->nullable();
            $table->unsignedBigInteger('updated_by_user_id')->nullable();
            $table->foreign('created_by_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('updated_by_user_id')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('viatura_historicos');
    }
}
