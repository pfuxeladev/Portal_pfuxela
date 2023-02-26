<?php

use App\Models\User;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFichObrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ficha_obras', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(App\Models\ocorrencia::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->text('descricao')->nullable();
            $table->boolean('ponto_situacao')->default(false);
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
        Schema::dropIfExists('ficha_obras');
    }
}
