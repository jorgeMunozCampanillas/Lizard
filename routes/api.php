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

/*========< CDN Route >=========*/
Route::get('cdn/{idPost}', [App\Http\Controllers\PostController::class, 'api'])->middleware('cors');

/*========< No Auth Routes >=========*/
//Users
Route::post('login', [App\Http\Controllers\UserController::class, 'login']);
Route::post('logout', [App\Http\Controllers\UserController::class, 'logout']);
Route::resource('users', App\Http\Controllers\UserController::class)->only(['store']);

//Code
//get all code
//Route::resource('code', App\Http\Controllers\PostController::class)->only(['index']); borrar?? 18/05/22
Route::resource('code', App\Http\Controllers\PostController::class)->only(['index']);

/*========< Auth Routes >=========*/
Route::middleware(['auth:sanctum'])->group(function(){
    //Users
    Route::group(["prefix" => "user"], function(){
        //Normal actions with the users
        Route::resource('users', App\Http\Controllers\UserController::class)->only(['destroy', 'update', 'index'])->middleware(['admin']);

        //Get auth
        Route::get('authId', [App\Http\Controllers\UserController::class, 'authId']);

        //Get all ids of the post with likes given
        Route::get('likesGiven', [App\Http\Controllers\UserController::class, 'getLikesGiven']);

        //Follows zone
        Route::group(["prefix" => "follow"], function(){
            //Get all ids of yours followers and followings
            Route::get('userData/{idUsu}', [App\Http\Controllers\UserController::class, 'userData']);
            //Action to follow/unfollow
            Route::post('follow',[App\Http\Controllers\UserController::class, 'follow']);
            //Get details of the followers (id, name, img)
            Route::get('following/{idUsu}',[App\Http\Controllers\UserController::class, 'getFollowingDetails']);
            Route::get('followers/{idUsu}',[App\Http\Controllers\UserController::class, 'getFollowerDetails']);
        });
    });
    
    //Post
    Route::group(["prefix"=>"post"], function(){ 
        //Code
        //Normal actions with code
        Route::resource('code', App\Http\Controllers\PostController::class)->except(['index']);
        Route::get('delete/{idPost}/{idUsu}', [ App\Http\Controllers\PostController::class, 'destroy'])->middleware(['sameUser']);
        Route::get('restore/{idPost}', [ App\Http\Controllers\PostController::class, 'restorePost']);

        
        //add one view to post
        Route::post('view',[ App\Http\Controllers\PostController::class, 'addView']);

        //Get all posts of the user passed
        Route::get('posts/{idUsu}', [App\Http\Controllers\PostController::class, 'getPosts']);
        //Get all posts deleteds of the user passed
        Route::get('deleted/{idUsu}', [App\Http\Controllers\PostController::class, 'getPostsDeleted']);
        //Get all posts of the users following
        Route::get('following', [App\Http\Controllers\PostController::class, 'getPostsFollowing']);


        //like/dislike action
        Route::post('like', [App\Http\Controllers\PostController::class, 'like']);
    });

    //Tags
    Route::group(["prefix"=>"tag"], function(){
        Route::resource('tag', App\Http\Controllers\TagController::class);
    });
        
});


