<?php

use App\Models\motorista;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOcorrenciasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ocorrencias', function (Blueprint $table) {
            $table->id();
            $table->string('descricao_ocorrencia')->nullable();
            $table->time('hora_da_ocorrencia')->nullable();
            $table->integer('kilomatragem');
            $table->string('tipo_ocorrencia')->nullable();
            $table->string('periodo')->nullable();
            $table->string('data_ocorrencia')->nullable();
            $table->foreignIdFor(motorista::class)->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->unsignedBigInteger('createdBy');
            $table->foreign('createdBy')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('updatedBy')->nullable();
            $table->foreign('updatedBy')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('ocorrencias');
    }
}
