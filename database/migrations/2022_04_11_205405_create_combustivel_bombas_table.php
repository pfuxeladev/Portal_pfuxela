<?php

use App\Models\combustivel;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCombustivelBombasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('combustivel_bombas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bomba_id');
            $table->foreign('bomba_id')->references('id')->on('bombas')->onDelete('cascade');
            $table->foreignIdFor(combustivel::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->double('preco_actual')->nullable();
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
        Schema::dropIfExists('combustivel_bombas');
    }
}
