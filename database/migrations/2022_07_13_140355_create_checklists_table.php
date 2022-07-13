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
            $table->foreignIdFor(CheckListOut::class)->nullable()->constrained();
            $table->foreignIdFor(App\Models\checklist_vars::class)->constrained();
            $table->foreignIdFor(checkListIn::class)->nullable()->constrained();
            $table->char('opcao', 5);
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
        Schema::dropIfExists('checklists');
    }
}
