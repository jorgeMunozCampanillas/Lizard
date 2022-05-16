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

    public static function getFollowing($idFollow){
        return DB::table('followers')->select('following')->where('follower', '=', $idFollow)->get();
    }
    public static function getFollowingDetails($idFollow){
        return DB::select(DB::raw("SELECT u.idUsu, u.name, u.img FROM user u JOIN (SELECT f.following FROM followers f WHERE f.follower = $idFollow) f WHERE u.idUsu = f.following;"));
    }

    public static function getFollower($idFollowing){
        return DB::table('followers')->select('follower')->where('following', '=', $idFollowing)->get();
    }
    public static function getFollowerDetails($idFollow){
        return DB::select(DB::raw("SELECT u.idUsu, u.name, u.img FROM user u JOIN (SELECT f.follower FROM followers f WHERE f.following = $idFollow) f WHERE u.idUsu = f.follower;"));
    }

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
