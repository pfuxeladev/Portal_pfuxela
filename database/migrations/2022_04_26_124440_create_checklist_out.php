<?php

use App\Models\checklist_vars;
use App\Models\motorista;
use App\Models\projecto;
use App\Models\User;
use App\Models\Viatura;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChecklistOut extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checklist_out', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Viatura::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(motorista::class)->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->foreignIdFor(projecto::class)->constrained();
            $table->boolean('carta_conducao')->default(false);
            $table->bigInteger('km_inicio');
            $table->time('hr_inicio')->nullable();
            $table->foreignIdFor(checklist_vars::class)->constrained();
            $table->string('estado');
            $table->foreignIdFor(User::class)->constrained()->cascadeOnUpdate();
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
        Schema::dropIfExists('checklist_out');
    }
}
