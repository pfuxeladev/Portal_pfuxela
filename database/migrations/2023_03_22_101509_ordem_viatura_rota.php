<?php

use App\Models\NewModule\OrdemViatura;
use App\Models\Rota;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class OrdemViaturaRota extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('OrdemViaturaRota', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(OrdemViatura::class)->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(Rota::class)->constrained()->cascadeOnUpdate();
            $table->integer('distance_per_route');
            $table->integer('qtd');
            $table->decimal('price')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
