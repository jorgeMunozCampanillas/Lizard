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
Route::get('cdn/{idPost}',  [App\Http\Controllers\PostController::class, 'cdn']);

/*========< No Auth Routes >=========*/
//Users
Route::post('login', [App\Http\Controllers\UserController::class, 'login']);
Route::post('logout', [App\Http\Controllers\UserController::class, 'logout']);
Route::resource('users', App\Http\Controllers\UserController::class)->only(['store']);
//Get search name for like %word%
Route::get('getSearchName/{name}/{options}', [App\Http\Controllers\PostController::class, 'getSearchName']);
//Get search for like %word%
Route::get('getPostByName/{name}', [App\Http\Controllers\PostController::class, 'getPostByName']);
Route::get('getPostByTag/{name}', [App\Http\Controllers\PostController::class, 'getPostByTag']);
Route::get('getPostFeatured', [App\Http\Controllers\PostController::class, 'getPostFeatured']);


//Code
//get all code
Route::resource('code/{offset}', App\Http\Controllers\PostController::class)->only(['index']);

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

        //Get random users that you dont follow
        Route::get('random', [App\Http\Controllers\UserController::class, 'randomUsers']);

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

        Route::get('getWork', [App\Http\Controllers\UserController::class, 'getWork']);

    });
    
    //Post
    Route::group(["prefix"=>"post"], function(){ 
        //Code
        //Normal actions with code
        Route::resource('code', App\Http\Controllers\PostController::class)->except(['index']);
        Route::get('delete/{idPost}/{idUsu}', [ App\Http\Controllers\PostController::class, 'destroy'])->middleware(['sameUser']);
        Route::get('restore/{idPost}', [ App\Http\Controllers\PostController::class, 'restorePost']);

        //Check if is my own code
        Route::get('isMyOwn/{idPost}', [App\Http\Controllers\PostController::class, 'isMyOwn']);
        
        //add one view to post
        Route::post('view',[ App\Http\Controllers\PostController::class, 'addView']);

        //Get all posts of the user passed
        Route::get('posts/{idUsu}/{limit}', [App\Http\Controllers\PostController::class, 'getPosts']);
        //Get all posts deleteds of the user passed
        Route::get('deleted/{idUsu}', [App\Http\Controllers\PostController::class, 'getPostsDeleted']);
        //Get all posts of the users following
        Route::get('following', [App\Http\Controllers\PostController::class, 'getPostsFollowing']);

        //like/dislike action
        Route::post('like', [App\Http\Controllers\PostController::class, 'like']);
        Route::get('getLastPostLoved', [App\Http\Controllers\PostController::class, 'getLastPostLoved']);
        Route::get('statistics', [App\Http\Controllers\PostController::class, 'statistics']);
    
    });
    
    //Tags
    Route::group(["prefix"=>"tag"], function(){
        Route::resource('tag', App\Http\Controllers\TagController::class);
        Route::get('own', [App\Http\Controllers\TagController::class, 'own']);
        Route::get('getOwnPostByTag/{idTag}', [App\Http\Controllers\TagController::class, 'getOwnPostByTag']);
    });
        
});


