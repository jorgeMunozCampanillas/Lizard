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

Route::get('athenticated', [App\Http\Controllers\UserController::class, 'auth']);//delete ¿?

/*========< No Auth Routes >=========*/
//Users
Route::post('login', [App\Http\Controllers\UserController::class, 'login']);
Route::post('logout', [App\Http\Controllers\UserController::class, 'logout']);
Route::resource('users', App\Http\Controllers\UserController::class)->only(['store']);
Route::get('getUser/{idUsu}', [App\Http\Controllers\UserController::class, 'getUser']);

//Code
Route::resource('code', App\Http\Controllers\PostController::class)->only(['index']);

/*========< Auth Routes >=========*/
Route::middleware(['auth:sanctum'])->group(function(){
    //Users
    Route::resource('users', App\Http\Controllers\UserController::class)->only(['index']);
    Route::resource('users', App\Http\Controllers\UserController::class)->only(['destroy', 'update'])->middleware(['admin']);
    Route::get('likesGiven', [App\Http\Controllers\UserController::class, 'getLikesGiven']);

    //Code
    Route::resource('code', App\Http\Controllers\PostController::class);
    Route::get('getPost', [App\Http\Controllers\UserController::class, 'getPosts']);
    Route::post('getPostOther', [App\Http\Controllers\UserController::class, 'getPostOther']);

    //User Post
    Route::post('like', [App\Http\Controllers\PostController::class, 'like']);
});


