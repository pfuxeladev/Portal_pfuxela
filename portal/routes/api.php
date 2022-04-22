<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [\App\Http\Controllers\API\Back\AuthenticationController::class, 'register']);
Route::post('login', [\App\Http\Controllers\API\Back\AuthenticationController::class, 'login']);

Route::group(['middleware'=>['api']],function () {
    Route::get('/user', [\App\Http\Controllers\API\Back\AuthenticationController::class, 'user']);
    Route::post('/logout', [\App\Http\Controllers\API\Back\AuthenticationController::class, 'logout']);
    Route::resource('/fabricante', App\Http\Controllers\API\Back\FabricanteController::class);
    Route::get('todasRotas', [App\Http\Controllers\API\Back\RotaController::class, 'todasRotas']);
    Route::get('listarViaturas', [App\Http\Controllers\API\Back\AbastecimentoController::class, 'ListarViaturas']);
    Route::get('/listProject', [App\Http\Controllers\API\Back\ProjectoController::class, 'listProjecto']);
Route::get('/getCombustivel', [App\Http\Controllers\API\Back\ViaturaController::class, 'getCombustivel']);
    Route::get('getQtdDisponivel/{viatura_id}', [App\Http\Controllers\API\Back\AbastecimentoController::class, 'getQtdDisponivel']);
    Route::get('viaturaHistorico/{id}', [App\Http\Controllers\API\Back\ViaturaController::class, 'HistoricoAbastecimento']);
    Route::get('RotaByProject/{projecto_id}', [App\Http\Controllers\API\Back\AbastecimentoController::class, 'RotaByProject']);

    Route::get('/Abastecimento/{refs}', [App\Http\Controllers\API\BACK\AbastecimentoController::class, 'show']);
    Route::get('/Abastecer/{refs}', [App\Http\Controllers\API\Back\OrdemController::class, 'abastecer']);

    Route::apiResources(
        ['viaturas' => App\Http\Controllers\API\Back\ViaturaController::class,
        'modelos' => App\Http\Controllers\API\Back\ModeloController::class,
        'Rotas'=>App\Http\Controllers\API\Back\RotaController::class,
        'bombas'=> App\Http\Controllers\API\Back\BombaController::class,
        'Abastecimento'=>App\Http\Controllers\API\Back\AbastecimentoController::class,
        'Ordems'=>App\Http\Controllers\API\Back\OrdemController::class,
        'Projectos'=>App\Http\Controllers\API\Back\ProjectoController::class,
        'Ocorrencia'=>App\Http\Controllers\API\Back\OcorrenciaController::class,
        'motorista' => App\Http\Controllers\API\Back\MotoristaController::class,
        'marca' => App\Http\Controllers\API\MarcaController::class,
        'combustivel' => App\Http\Controllers\API\CombustivelController::class,
        ]);
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return auth()->user();


// });
