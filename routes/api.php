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

Route::post('login', [App\Http\Controllers\UserController::class, 'login']);
Route::get('athenticated', [App\Http\Controllers\UserController::class, 'auth']);
Route::resource('code', App\Http\Controllers\PostController::class)->only(['index']);
Route::post('logout', [App\Http\Controllers\UserController::class, 'logout']);

//Auth routes
Route::middleware(['auth:sanctum'])->group(function(){
    //Users
    Route::resource('users', App\Http\Controllers\UserController::class)->only(['store', 'index']);
    Route::resource('users', App\Http\Controllers\UserController::class)->only(['destroy', 'update'])->middleware(['admin']);
    
    //Code
    Route::resource('code', App\Http\Controllers\PostController::class);
    Route::get('getPost', [App\Http\Controllers\UserController::class, 'getPosts']);

});


