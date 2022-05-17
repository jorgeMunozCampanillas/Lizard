<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Auth;

class Followers extends Model
{
    use HasFactory;
    protected $table = 'followers';

    // ------< FOLLOWING >-------
    //Return ids of following
    public static function getFollowing($idFollow){
        return DB::table('followers')->select('following')->where('follower', '=', $idFollow)->get();
    }
    //Return id, name, img of followings
    public static function getFollowingDetails($idFollow){
        return DB::select(DB::raw("SELECT u.idUsu, u.name, u.img FROM user u JOIN (SELECT f.following FROM followers f WHERE f.follower = $idFollow) f WHERE u.idUsu = f.following;"));
    }
    //Get all post that user where we are following
    public static function getFollowingPosts(){
        $posts = DB::table('post')->join('user', 'user.idUsu', '=', 'post.idUsu')->join('followers', 'followers.follower', '=', 'user.idUsu')->select('user.name', 'user.img AS userImg', 'user.idUsu', 'post.*')->where('followers.following', '=', Auth::id())->get();

        //Ad likes to posts
        foreach ($posts as $key => $value) {
            $posts[$key]->likes = DB::table('post_like')->where('idPost', '=', $value->idPost)->count() ?? 0;
        }
        return $posts;
        /* select `user`.`name`, `user`.`idUsu`, `post`.`idPost` from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu` 
            inner join `followers` on `followers`.`follower` = `user`.`idUsu` 
            where `followers`.`following` = 1; */
    }


     // ------< FOLLOWERS >-------
     //Return ids of followers
    public static function getFollower($idFollowing){
        return DB::table('followers')->select('follower')->where('following', '=', $idFollowing)->get();
    }
    //Return id, name, img of followers
    public static function getFollowerDetails($idFollow){
        return DB::select(DB::raw("SELECT u.idUsu, u.name, u.img FROM user u JOIN (SELECT f.follower FROM followers f WHERE f.following = $idFollow) f WHERE u.idUsu = f.follower;"));
    }

    // ------< ACTIONS >-------
    //follow or unfollow 
    public static function follow($idFollow){
        //follow
        $res = DB::table('followers')->insertOrIgnore([
            ['following'=>$idFollow, 'follower'=>Auth::id(), 'created_at'=>now(), 'updated_at'=>now()]
        ]);
        //unfollow
        if ($res==null) {
            DB::table('followers')->where('following', '=', $idFollow)->where('follower', '=', Auth::id())->delete();
        }
    }


}
