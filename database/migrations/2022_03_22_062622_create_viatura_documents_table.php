<?php

use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateViaturaDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('viatura_documents', function (Blueprint $table) {
            $table->id();
            $table->dateTime('data_inspencao')->nullable();
            $table->dateTime('prazo_inspencao')->nullable();
            $table->dateTime('data_manifesto')->nullable();
            $table->dateTime('prazo_manifesto')->nullable();
            $table->dateTime('data_seguros')->nullable();
            $table->dateTime('prazo_seguros')->nullable();
            $table->dateTime('data_licenca')->nullable();
            $table->dateTime('prazo_licenca')->nullable();
            $table->dateTime('data_taxa_radio')->nullable();
            $table->dateTime('prazo_taxa_radio')->nullable();
            $table->string('anexos_documentos',255)->nullable();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('viatura_documents');
    }
}
