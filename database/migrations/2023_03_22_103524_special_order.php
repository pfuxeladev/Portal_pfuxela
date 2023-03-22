<?php

use App\Models\NewModule\Customers;
use App\Models\NewModule\OrdemViatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SpecialOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Specials', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(OrdemViatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Customers::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->text('local_recolha');
            $table->time('hora_recolha');
            $table->text('local_chegada');
            $table->time('hora_chegada');
            $table->unsignedBigInteger('createdBy');
            $table->unsignedBigInteger('approvedBy');
        });

        Schema::table('Specials', function($table){
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
