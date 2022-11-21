<?php

use App\Models\fichaObra;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFichaObraChecklistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ficha_obra_checklists', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(fichaObra::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->string('item');
            $table->boolean('is_checked')->default(false);
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
        Schema::dropIfExists('ficha_obra_checklists');
    }
}
