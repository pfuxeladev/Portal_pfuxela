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
            $table->string('tipo_de_combustivel');
            $table->double('qtd_abastecida', 8,2);
            $table->double('preco_combustivel', 8,2)->nullable();
            $table->decimal('iva_perc')->default(17);
            $table->decimal('iva_amount')->nullable();
            $table->double('sub_total', 10,2)->nullable();
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
