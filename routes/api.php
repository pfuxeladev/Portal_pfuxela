<?php

use App\Http\Controllers\ChecklistController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [\App\Http\Controllers\API\Back\AuthenticationController::class, 'register']);
Route::post('login', [\App\Http\Controllers\API\Back\AuthenticationController::class, 'login']);
Route::get('checklists', [ChecklistController::class, 'index']);
Route::post('checklist-out', [ChecklistController::class, 'saveChacklistOut']);

Route::middleware('auth:api')->group(function () {

    Route::get('/permissions', [App\Http\Controllers\API\Back\UserController::class, 'permissionsIndex'])
        ->name('permissions.index')
        ->middleware('permission:View All Permissions');

    Route::get('/roles', [App\Http\Controllers\API\Back\UserController::class, 'rolesIndex'])
        ->name('roles.index')
        ->middleware('permission:View All Roles');

    Route::post('/roles/{role}/assign/{user}', [\App\Http\Controllers\API\Back\UserController::class, 'rolesAddUser'])
        ->name('roles.addUser')
        ->middleware('permission:Assign Role');

    Route::post('/roles/{role}/unassign/{user}', [App\Http\Controllers\API\Back\UserController::class, 'rolesRemoveUser'])
        ->name('roles.removeUser')
        ->middleware('permission:Unassign Role');

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

    Route::get('/listEmpresa', [App\Http\Controllers\API\Back\UserController::class, 'listEmpresas']);

    Route::get('/listDeps', [App\Http\Controllers\API\Back\UserController::class, 'listDepartamentos']);

    Route::get('/listMotoristas', [App\Http\Controllers\API\Back\CheckListOutController::class, 'ListMotoristas']);
    Route::get('/listaIncedentes', [App\Http\Controllers\API\Back\CheckListInController::class, 'listaIncedentes']);

    Route::get('/listAllViaturas', [App\Http\Controllers\API\Back\ViaturaController::class, 'listViatura']);

    Route::get('/listViaturaDentro', [App\Http\Controllers\API\Back\CheckListOutController::class, 'listViaturaDentro']);
    Route::get('/listViaturaFora', [App\Http\Controllers\API\Back\CheckListInController::class, 'listViaturaFora']);
    Route::get('/kmActual/{viatura_id}', [\App\Http\Controllers\API\Back\CheckListOutController::class, 'kmActual']);
    Route::post('/abastecimento_extra', [App\Http\Controllers\API\Back\AbastecimentoController::class, 'abastecer']);

    // Aprovar abastecimento e reprovar
    Route::post('/AprovarOrdem/{refs}', [App\Http\Controllers\API\Back\OrdemController::class, 'AprovarOrdem']);
    Route::post('/CancelarOrdem/{refs}', [App\Http\Controllers\API\Back\OrdemController::class, 'CancelarOrdem']);
    Route::get('/AbastecimentoRecorrente', [App\Http\Controllers\API\Back\AbastecimentoController::class, 'abastecimentoRecorrente']);
    Route::get('/AbstCorrDetails/{refs}', [App\Http\Controllers\API\Back\AbastecimentoController::class, 'AbstRecDetails']);

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
        'users' => \App\Http\Controllers\API\BACK\UserController::class,
        'CheckListOut'=> \App\Http\Controllers\API\Back\CheckListOutController::class,
        'CheckListIn'=> \App\Http\Controllers\API\Back\CheckListInController::class
        ]);
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return auth()->user();


// });
