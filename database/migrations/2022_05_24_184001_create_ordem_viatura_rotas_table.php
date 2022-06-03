<?php

use App\Models\ordem_viatura;
use App\Models\Rota;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdemViaturaRotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordem_viatura_rotas', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(ordem_viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Rota::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->decimal('qtd', 5,2)->default(0);
            $table->decimal('preco_total', 8,2);
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
        Schema::dropIfExists('ordem_viatura_rotas');
    }
}
