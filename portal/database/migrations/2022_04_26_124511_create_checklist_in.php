<?php

use App\Models\CheckListOut;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChecklistIn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checklist_in', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(CheckListOut::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Viatura::class)->nullable()->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(motorista::class)->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->bigInteger('nr_passageiros');
            $table->bigInteger('km_inicio');
            $table->bigInteger('km_fim');
            $table->time('hr_inicio')->nullable();
            $table->time('hr_fim')->nullable();
            $table->boolean('carta_conducao')->default(false);
            $table->boolean('teste_alcool')->default(false);
            $table->boolean('uniforme')->default(false);
            $table->boolean('motorista_dss')->default(false);
            $table->boolean('lista_presenca')->default(false);
            $table->boolean('colete_entrada')->default(false);
            $table->boolean('colete_saida')->default(false);
            $table->boolean('triangulo_entrada')->default(false);
            $table->boolean('triangulo_saida')->default(false);
            $table->boolean('chave_roda_entrada')->default(false);
            $table->boolean('chave_roda_saida')->default(false);
            $table->boolean('kit_reboque_saida')->default(false);
            $table->boolean('kit_reboque_entrada')->default(false);
            $table->boolean('kit_1_socorros_saida')->default(false);
            $table->boolean('kit_1_socorros_entrada')->default(false);
            $table->boolean('pneu_sobr_entrada')->default(false);
            $table->boolean('pneu_sobr_saida')->default(false);
            $table->boolean('macaco_saida')->default(false);
            $table->boolean('macaco_entrada')->default(false);
            $table->boolean('extintor_saida')->default(false);
            $table->boolean('extintor_entrada')->default(false);
            $table->boolean('livrete_saida')->default(false);
            $table->boolean('livrete_entrada')->default(false);
            $table->boolean('licenca_saida')->default(false);
            $table->boolean('licenca_entrada')->default(false);
            $table->boolean('seguros_saida')->default(false);
            $table->boolean('seguros_entrada')->default(false);
            $table->boolean('inspencao_saida')->default(false);
            $table->boolean('inspencao_entrada')->default(false);
            $table->boolean('taxaradio_saida')->default(false);
            $table->boolean('taxaradio_entrada')->default(false);
            $table->boolean('is_incidente')->default(false);
            $table->string('chefe_operacao')->nullable();
            $table->text('relatorio_geral')->nullable();
            $table->string('anexos');
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('checklist_in');
    }
}
