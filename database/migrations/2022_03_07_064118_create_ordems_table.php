<?php

use App\Models\Bombas;
use App\Models\Cliente;
use App\Models\motorista;
use App\Models\projecto;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ordems', function (Blueprint $table) {
            $table->id();
            $table->uuid('refs');
            $table->string('codigo_ordem');
            $table->string('estado')->default('pendente');
            $table->foreignIdFor(Bombas::class)->nullable()->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->unsignedBigInteger('createdBy');
            $table->unsignedBigInteger('approvedBy')->nullable();
            $table->foreign('createdBy')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('approvedBy')->references('id')->on('users')->onDelete('cascade');
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
        Schema::dropIfExists('ordems');
    }
}
