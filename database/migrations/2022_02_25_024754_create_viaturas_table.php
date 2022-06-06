<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateViaturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('viaturas', function (Blueprint $table) {
            $table->id();
            $table->string('nome_viatura');
            $table->string('matricula')->unique();
            $table->year('ano_fabrico');
            $table->string('nr_chassi')->unique()->nullable();
            $table->integer('nr_motor')->unique()->nullable();
            $table->string('nr_livrete')->nullable();
            $table->integer('lotacao')->nullable();
            $table->string('capacidade_tanque');
            $table->string('capacidade_media');
            $table->bigInteger('qtd_disponivel')->default(0);
            $table->decimal('qtd_autorizada', 10,2)->nullable();
            $table->string('tipo_combustivel')->nullable();
            $table->bigInteger('kilometragem')->nullable();
            $table->boolean('estado')->default(false);
            $table->string('locate')->default('IN');
            $table->string('viatura_avatar')->nullable();
            $table->foreignIdFor(\App\Models\Modelo::class)->constrained()->cascadeOnUpdate();
            $table->foreignIdFor(\App\Models\marca::class)->constrained()->cascadeOnUpdate();
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
        Schema::dropIfExists('viaturas');
    }
}
