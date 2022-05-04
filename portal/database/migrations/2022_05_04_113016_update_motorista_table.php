<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMotoristaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
       Schema::table('motoristas', function (Blueprint $table) {

        $table->string('doc_type')->after('carta_conducao');
        $table->dropColumn('bilhete_identidade');
        $table->string('nr_documento')->after('doc_type');
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
