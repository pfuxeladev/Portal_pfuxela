<?php

namespace App\Providers;

use App\Http\Services\OrderHistoryService;
use App\Interfaces\OrdensBombasInterface;
use App\Interfaces\OrderHistoryInterface;
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
        $this->app->bind(OrderHistoryInterface::class, OrderReportRepository::class);
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
