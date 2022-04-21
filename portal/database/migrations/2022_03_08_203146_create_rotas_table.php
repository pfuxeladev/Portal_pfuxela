<?php

use App\Models\Cliente;
use App\Models\projecto;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rotas', function (Blueprint $table) {
            $table->id();
            $table->string('nome_rota');
            $table->string('pontos');
            $table->string('periodo');
            $table->time('horaInicio');
            $table->time('horaFim')->nullable();
            $table->foreignIdFor(projecto::class)->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('tipoRota')->nullable();
            $table->string('endereco')->nullable();
            $table->bigInteger('distancia_km')->nullable();
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
        Schema::dropIfExists('rotas');
    }
}
