<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('athenticated', [App\Http\Controllers\UserController::class, 'auth']);

//Users
Route::resource('users', App\Http\Controllers\UserController::class)->only(['store', 'index', 'destroy', 'update'])->middleware(['auth:sanctum']);
Route::post('login', [App\Http\Controllers\UserController::class, 'login']);
Route::post('logout', [App\Http\Controllers\UserController::class, 'logout']);


//Code
Route::resource('code', App\Http\Controllers\PostController::class);
