<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Models\PostLike;
use App\Models\Followers;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{

    //-------------------------------------
    // <<<<<<<<<<<- RESOURCES ->>>>>>>>>>>>>
    //-------------------------------------

    /**
     * Display a listing of the posts with her users.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $posts = Post::getPosts();

        return response()->json([
            'data' => $posts,
        ], 200);

    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'html' => ['required'],
        ]);
        
        $file = $request->file('img');
        $path = $request->file('img')->storePublicly('code', 'public');

        $post = Post::create([
            'views' => '0',
            'idUsu' => $request->idUsu,
            'postName' => $request->postName,
            'html' => $request->html,
            'css' => $request->css,
            'js' => $request->js,
            'img' => $path,
        ]);

        return response()->json([
            'post' => $post
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $idPost)
    {
        return response()->json([
            'code' => Post::findOrFail($idPost),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    //-------------------------------------
    // <<<<<<<<<<<- POSTS ->>>>>>>>>>>>>
    //-------------------------------------
    //Get all post of the user passed
    public function getPosts(Request $request){
        
        $posts = Post::getPostsUsu($request->idUsu);

        return response()->json([
            'data' => $posts,
        ], 200);

    }

    //Get all posts of the users following
    public function getPostsFollowing(Request $request){
        $posts = Followers::getFollowingPosts();

        return response()->json([
            'data' => $posts,
        ], 200);

    }

    //-------------------------------------
    // <<<<<<<<<<<- VIEWS ->>>>>>>>>>>>>
    //-------------------------------------

    //add one view to post passed
    public function addView(Request $request){
        
        $post = Post::findOrFail($request->idPost);
        if ($post) {
            $post->views++;
            $post->save();
        }

    }


    //------------------------------------
    // <<<<<<<<<<<- LIKES ->>>>>>>>>>>>>
    //------------------------------------
    //Action to like/dislike
    public function like(Request $request){
        $res = PostLike::like($request->idPost);
        return response()->json([
            'status' => $request->idUsu,
            'op' => $res
        ]);
    }
}
