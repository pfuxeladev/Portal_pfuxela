<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CustomerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('Costumers', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('contacto');
            $table->unsignedBigInteger('createdBy');
            $table->unsignedBigInteger('approvedBy');

        });

        Schema::table('Costumers', function($table){
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
