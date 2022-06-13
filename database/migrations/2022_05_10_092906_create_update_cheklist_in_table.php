<?php

use App\Models\incidente;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUpdateCheklistInTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('checklist_in', function(Blueprint $table){
            $table->string('nrPassageiros')->nullable()->after('hr_fim');
            $table->foreignIdFor(incidente::class)->constrained()->nullable()->cascadeOnDelete()->cascadeOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

    }
}
