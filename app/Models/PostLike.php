<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class PostLike extends Model
{
    use HasFactory;
    protected $table = 'post_like';
    public $timestamps = false;

    public static function likePost($idPost){
        return PostLike::where('idPost', '=', $idPost)->count();
    }

    public static function like($idPost){
        $isLike = PostLike::where('idPost', '=', $idPost)->where('idUsu', '=', Auth::id())->get();
        if (count($isLike)!=0) {
            return PostLike::where('idPost', '=', $idPost)->where('idUsu', '=',Auth::id())->delete();
        }else{
            return PostLike::insert([
                'idUsu' => Auth::id(),
                'idPost' => $idPost
            ]);
        }
    }

}
