<?php

namespace App\Providers;

use App\Interfaces\ViaturaAlocadaInterface;
use App\Repositories\AlocateViaturaRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ViaturaAlocadaInterface::class, AlocateViaturaRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
