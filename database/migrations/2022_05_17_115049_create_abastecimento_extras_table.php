<?php

use App\Models\abastecimento;
use App\Models\motorista;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbastecimentoExtrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abastecimento_extras', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(abastecimento::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(motorista::class)->constrained()->cascadeOnUpdate();
            $table->decimal('qtd', 5,2);
            $table->time('horaSaida');
            $table->string('destino');
            $table->text('descricao');
<<<<<<< HEAD
            $table->string('estado')->default('pendente');
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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
        Schema::dropIfExists('abastecimento_extras');
    }
}
