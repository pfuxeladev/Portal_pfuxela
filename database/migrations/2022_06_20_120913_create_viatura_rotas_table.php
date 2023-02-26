<?php

use App\Models\Rota;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateViaturaRotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('viatura_rotas', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Viatura::class)->constrained();
            $table->foreignIdFor(Rota::class)->constrained();
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
        Schema::dropIfExists('viatura_rotas');
    }
}
