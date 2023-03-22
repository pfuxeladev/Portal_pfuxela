<?php

use App\Models\abastecimento;
use App\Models\Ordem;
use App\Models\User;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdemViaturasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordem_viaturas', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Ordem::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->bigInteger('qtd_abastecida');
            $table->decimal('preco_consumo', 10,2)->default(1);
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger('updatedBy')->nullable();
            $table->foreign('updatedBy')->references('id')->on('users')->onDelete('cascade');
            $table->text('justificacao')->nullable();
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
        Schema::dropIfExists('ordem_viaturas');
    }
}
