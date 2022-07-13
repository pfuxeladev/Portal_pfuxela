<?php

use App\Models\CheckListOut;
use App\Models\motorista;
use App\Models\User;
use App\Models\Viatura;
use App\Models\checklist_vars;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChecklistIn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checklist_in', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Viatura::class)->nullable()->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(motorista::class)->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->unsignedBigInteger('check_list_out_id');
            $table->bigInteger('km_fim');
            $table->time('hr_fim')->nullable();
            $table->string('estado');
            $table->boolean('is_incidente')->default(false);
            $table->string('chefe_operacao')->nullable();
            $table->text('relatorio_geral')->nullable();
            $table->string('anexos')->nullable();
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('checklist_in');
    }
}
