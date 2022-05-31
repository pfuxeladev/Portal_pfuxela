<?php

use App\Models\Bombas;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Ordem;
use App\Models\User;

class CreateAbastecimentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abastecimentos', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('refs');
            $table->string('qtd_ant')->nullable();
            $table->string('qtd_rec')->nullable();
            $table->string('file_ordem')->nullable();
            $table->foreignIdFor(Bombas::class)->nullable()->constrained()->nullOnDelete('cascade')->cascadeOnUpdate();
            $table->foreignIdFor(Ordem::class)->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('abastecimentos');
    }
}
