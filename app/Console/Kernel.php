<?php

namespace App\Console;

use App\Console\Commands\DatabaseBackUp;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Console\Commands\ReportDatasdayCron;
class Kernel extends ConsoleKernel
{
    protected $commands = [
        // 'App\Console\Commands\Inspire',
        ReportDatasdayCron::class,
        DatabaseBackUp::class,
        ];

    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->everyMinute();
        // $schedule->command('ReportAbastecimento:cron')->weekly();
        $schedule->command('database:backup')->daily();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
