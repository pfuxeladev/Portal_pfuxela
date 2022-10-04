<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->id();
            $table->string('nome_completo');
            $table->string('apelido')->nullable();
            $table->date('data_nascimento')->nullable();
            $table->integer('NUIT')->nullable();
            $table->text('endereco')->nullable();
            $table->string('genero')->nullable();
            $table->string('cargo')->nullable();
            $table->string('carreira')->nullable();
            $table->foreignIdFor(\App\Models\Empresa::class)->constrained()->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('people');
    }
}
