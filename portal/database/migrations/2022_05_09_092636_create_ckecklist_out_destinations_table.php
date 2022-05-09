<?php

use App\Models\CheckListOut;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCkecklistOutDestinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ckecklist_out_destinations', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(CheckListOut::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->text('descricao_trajecto');
            $table->time('horaPrevistaSaida');
            $table->time('horaPrevistaEntrada');
            $table->timestamps();
        });
        Schema::table('check_list_in', function(Blueprint $table){
            $table->string('nrPassageiros')->nullable()->after('hr_inicio');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ckecklist_out_destinations');
    }
}
