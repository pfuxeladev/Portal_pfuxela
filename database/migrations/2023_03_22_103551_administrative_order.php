<?php

use App\Models\NewModule\Employee;
use App\Models\Ordem;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AdministrativeOrder extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Administratives', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Ordem::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Employee::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->text('local_recolha');
            $table->time('hora_recolha');
            $table->text('local_chegada');
            $table->time('hora_chegada');
            $table->unsignedBigInteger('createdBy');
            $table->unsignedBigInteger('approvedBy');
        });

        Schema::table('Administratives', function($table){
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
