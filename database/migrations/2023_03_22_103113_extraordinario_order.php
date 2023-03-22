<?php

use App\Models\Ordem;
use App\Models\Rota;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ExtraordinarioOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Extraordinaries', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Ordem::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Rota::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->time('hora_saida');
            $table->text('arguments');
            $table->unsignedBigInteger('createdBy');
            $table->unsignedBigInteger('approvedBy');
        });

        Schema::table('Extraordinaries', function($table){
            $table->foreign('createdBy')->references('id')->on('users')->onCreate('cascade');
            $table->foreign('approvedBy')->references('id')->on('users')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
