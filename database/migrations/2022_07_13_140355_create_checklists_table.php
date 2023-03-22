<?php

use App\Models\checkListIn;
use App\Models\CheckListOut;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChecklistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checklists', function (Blueprint $table) {
            $table->id();
            // $table->foreignIdFor(CheckListOut::class)->nullable()->constrained()->cascadeOnDelete()->cascadeOnDelete();
            $table->unsignedBigInteger('checklist_out_id')->nullable();
            $table->foreignIdFor(App\Models\checklist_vars::class)->constrained()->cascadeOnDelete()->cascadeOnDelete();
            // $table->foreignIdFor(checkListIn::class)->nullable()->constrained()->cascadeOnDelete()->cascadeOnDelete();
            $table->unsignedBigInteger('checklist_in_id')->nullable();
            $table->char('opcao', 5)->nullable();
            $table->char('opcao_entrada', 5)->nullable();
            $table->timestamps();
        });

        Schema::table('checklists', function($table){
            $table->foreign('checklist_out_id')->references('id')->on('checklist_out')->onDelete('cascade');
            $table->foreign('checklist_in_id')->references('id')->on('checklist_in')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('checklists');
    }
}
