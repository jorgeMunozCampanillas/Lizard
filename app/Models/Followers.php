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

        $posts = DB::select(
            DB::raw("
            Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            inner join `followers` on `followers`.`following` = `user`.`idUsu`
            WHERE `followers`.`follower` = ".Auth::id().";")
        );

        return $posts;
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
