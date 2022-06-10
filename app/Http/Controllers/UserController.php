<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Models\PostLike;
use App\Models\Followers;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{


    //-------------------------------------
    // <<<<<<<<<<<- RESOURCES ->>>>>>>>>>>>>
    //-------------------------------------

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $req)
    {
        $users = User::all();
        return response()->json($users);
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:user'],
            'password' =>['required'],
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        $file = $request->file('img');
        $path = $request->file('img')->storePublicly('avatars', 'public');
        
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'permissions' => 1,
            'img' => $path,
        ]);

        return response()->json([
            'user' => $user
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        User::destroy($id);
    }


    //-------------------------------------
    // <<<<<<<<<<<- AUTH ->>>>>>>>>>>>>
    //-------------------------------------
    public function authId(Request $request){
        return response()->json([
            'data'=>Auth::user()->idUsu,
        
        ]);
    }

    //-------------------------------------
    // <<<<<<<<<<<- LOGIN/OUT ->>>>>>>>>>>>>
    //-------------------------------------
    public function login(Request $req){

        $req->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if(Auth::attempt($req->only('email', 'password'))){
            return response()->json([
                'status' => 1,
                'data' => Auth::user(), 
            ], 200);
        }else{
            return response()->json([
                'status' => 0,
                'cod-error' => 'login-error'
            ], 200);
        }

    }

    public function logout(){
        Auth::logout();
    }


    //-------------------------------------
    // <<<<<<<<<<<- FOLLOWS ->>>>>>>>>>>>>
    //-------------------------------------

    //Return data of the user passed and her ids of followers and followings
    public function userData(Request $request){
        $usu = $request->idUsu;
        $data = User::findOrFail($usu);

        $followers = Followers::getFollower($usu);
        //Pass the [{},{}] to [x,x]
        $followersArr = [];
        foreach ($followers as $key => $value) {
            array_push($followersArr, $value->follower);
        }

        $followings = Followers::getFollowing($usu);
        $followingssArr = [];
        foreach ($followings as $key => $value) {
            array_push($followingssArr, $value->following);
        }

        $follows=[
            'followers'=>$followersArr,
            'followings'=>$followingssArr,
        ];

        return response()->json([
            'data' => $data,
            'follows' => $follows,
            'status' => 1,
        ]);
    }
    //Return follows details (id, name, img)
    public function getFollowingDetails(Request $request){
        $following = Followers::getFollowingDetails($request->idUsu);
        return response()->json(['data'=>$following]);
    }
    public function getFollowerDetails(Request $request){
        $following = Followers::getFollowerDetails($request->idUsu);
        return response()->json(['data'=>$following]);
    }
    //Action follow/unfollow
    public function follow(Request $request){
        if (Followers::follow($request->idUsu)) {
            return response()->json([1]);
        }
    }



    //-------------------------------------
    // <<<<<<<<<<<- LIKES ->>>>>>>>>>>>>
    //-------------------------------------

    //Return all likes that the user give 
    public function getLikesGiven(){
        $likes = Auth::user()->getLikesGiven();
        // return response()->json(count($likes));
        //Pass the [{},{}] to [x,x]
        $likesArr = [];
        for ($i=0; $i < count($likes); $i++) { 
            array_push($likesArr, $likes[$i]->idPost);
        }

        return response()->json([
            'data' => $likesArr,
            'status' => 1,
        ]);
    }


    //-------------------------------------
    // <<<<<<<<<<<- MISCELLANIA ->>>>>>>>>>>>>
    //-------------------------------------
    public function randomUsers(){
        $users = [
            "data" => User::getRandomUserNotFollow()
        ];
        return response()->json(User::getRandomUserNotFollow(), 200);
    }

    public function getWork(Request $request){
        return response()->json(User::getWork());
    }


}
