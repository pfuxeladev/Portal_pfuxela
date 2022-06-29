<?php

use App\Models\motorista;
use App\Models\projecto;
use App\Models\User;
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
            $table->foreignIdFor(projecto::class)->constrained();
            $table->boolean('carta_conducao')->default(false);
            $table->bigInteger('km_inicio');
            $table->time('hr_inicio')->nullable();
            $table->boolean('uniforme')->default(false);
            $table->string('limpezaState');
            $table->string('vasoEspansorState');
            $table->string('LiquidoVidroState');
            $table->string('OleoMotorState');
            $table->string('OleoDirecaoState');
            $table->string('OleoTravoesState');
            $table->string('ACState');
            $table->string('SistemaABS_State');
            $table->boolean('CintoSeguracaState')->default(true);
            $table->string('tipo_saida');
            $table->boolean('motorista_dss')->default(false);
            $table->boolean('lista_presenca')->default(false);
            $table->boolean('colete_saida')->default(false);
            $table->boolean('pneu_sobr_saida')->default(false);
            $table->boolean('macaco_saida')->default(false);
            $table->boolean('inspencao_saida')->default(false);
            $table->boolean('triangulo_saida')->default(false);
            $table->boolean('chave_roda_saida')->default(false);
            $table->boolean('kit_reboque_saida')->default(false);
            $table->boolean('kit_1_socorros_saida')->default(false);
            $table->boolean('extintor_saida')->default(false);
            $table->boolean('livrete_saida')->default(false);
            $table->boolean('licenca_saida')->default(false);
            $table->boolean('seguros_saida')->default(false);
            $table->boolean('taxaradio_saida')->default(false);
            $table->foreignIdFor(User::class)->constrained()->cascadeOnUpdate();
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
