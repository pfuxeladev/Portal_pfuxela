<?php

namespace App\Providers;

use App\Interfaces\OrdensBombasInterface;
use App\Interfaces\ViaturaAlocadaInterface;
use App\Repositories\AlocateViaturaRepository;
use App\Repositories\OrdensBombasRepository;
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
        $this->app->bind(OrdensBombasInterface::class, OrdensBombasRepository::class);
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
