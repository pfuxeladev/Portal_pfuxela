<?php

use App\Models\CheckListOut;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChecklistOutDestinationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checklist_out_destinations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('checklist_out_id');
            $table->foreign('checklist_out_id')->references('id')->on('checklist_out')->onDelete('cascade');
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
        Schema::dropIfExists('checklist_out_destinations');
    }
}
