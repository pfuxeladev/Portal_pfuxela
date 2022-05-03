<?php

use App\Models\motorista;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChecklistOut extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checklist_out', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(motorista::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('limpezaState');
            $table->string('vasoEspansorState');
            $table->string('LiquidoVidroState');
            $table->string('OleoMotorState');
            $table->string('OleoDirecaoState');
            $table->string('OleoTravoesState');
            $table->string('ACState');
            $table->string('SistemaABS_State');
            $table->string('CintoSeguracaState');
            $table->string('destino');
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
        Schema::dropIfExists('checklist_out');
    }
}
