<?php

use App\Models\ocorrencia;
use App\Models\Ordem;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class WorkshopOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Workshops', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Ordem::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(ocorrencia::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->integer('kilometragem_actual');
            $table->integer('qtd_existente');
            $table->integer('qtd_a_abastecer');
            $table->text('arguments');
            $table->unsignedBigInteger('createdBy');
            $table->unsignedBigInteger('approvedBy');
        });

        Schema::table('Workshops', function($table){
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
