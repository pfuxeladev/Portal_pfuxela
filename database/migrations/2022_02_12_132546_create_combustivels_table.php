<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCombustivelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('combustivels', function (Blueprint $table) {
            $table->id();
            $table->string('tipo_combustivel');
<<<<<<< HEAD
            $table->decimal('preco_actual', 8,2)->nullable();
=======
>>>>>>> 6389f522f8adc3ad74827d4fe08232d8d3a2c033
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
        Schema::dropIfExists('combustivels');
    }
}
