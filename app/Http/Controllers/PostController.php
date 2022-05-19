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
        ], 200);
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
            'data' => Post::getPost($idPost),
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
     * Remove the specified resource from storage,
     * if it is not in the trash, it is throw away
     * else it is REMOVED!!!
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $idPost, $idUsu)
    {
        $post = Post::withTrashed()->findOrFail($idPost);
        if ($post->deleted_at) {
            $post->forceDelete();
        }else{
            $post->delete();
        }
        return response()->json(200);
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

    //Get all posts deleted
    public function getPostsDeleted($idUsu){
        
        $posts = Post::getPostsDeletdUsu($idUsu);

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

    //Restore one post from the trash
    public function restorePost(Request $request, $idPost){
        Post::withTrashed()->find($idPost)->restore();

        return response()->json([
            true
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
