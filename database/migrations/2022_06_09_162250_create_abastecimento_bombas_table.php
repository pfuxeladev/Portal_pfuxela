<?php

use App\Models\Bombas;
use App\Models\Ordem;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAbastecimentoBombasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abastecimento_bombas', function (Blueprint $table) {
            $table->id();
            $table->string('estado')->nullable();
            $table->string('tipo_de_combustivel')->default('Diesel');
            $table->double('qtd_abastecida', 8,2);
            $table->double('preco_combustivel', 8,2)->nullable();
            $table->decimal('iva_perc')->default(17);
            $table->decimal('iva_amount')->nullable();
            $table->string('viatura_fornecedora')->nullable();
            $table->string('selo_abastecimento')->nullable();
            $table->string('anexo_factura')->nullable();
            $table->string('nome_motorista')->nullable();
            $table->string('identificacao')->nullable();
            $table->string('fornecedor')->nullable();
            $table->string('fornecedor_contacto')->nullable();
            $table->text('observacao')->nullable();
            $table->double('sub_total', 10,2)->nullable();
            $table->dateTime('data_recepcao')->nullable();
            $table->foreignIdFor(Ordem::class)->constrained()->cascadeOnUpdate();
            $table->foreignIdFor(Bombas::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('abastecimento_bombas');
    }
}
