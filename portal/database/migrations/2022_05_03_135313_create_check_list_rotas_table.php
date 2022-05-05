<?php

use App\Models\CheckListOut;
use App\Models\Rota;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCheckListRotasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_list_rotas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('check_list_out_id');
            // $table->foreignIdFor(CheckListOut::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(Rota::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreign('check_list_out_id')->references('id')->on('checklist_out')->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('check_list_rotas');
    }
}
