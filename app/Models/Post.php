<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class Post extends Model
{
    use HasFactory;
    protected $table='post';
    protected $primaryKey = 'idPost';

    protected $fillable = ['idUsu', 'postName','html','css','js', 'img', 'views'];

    public function user(){
        return $this->belongsTo('App\Models\User', 'idUsu', 'idUsu')->get(['idUsu', 'name', 'email', 'img']);
    }

    //Get all posts
    public static function getPosts(){
        $posts = DB::table('post')
        ->join('user', 'user.idUsu', '=', 'post.idUsu')
        ->select('user.name', 'user.img AS userImg', 'user.idUsu', 'post.*')
        ->orderBy('views', 'desc')
        ->get();

        //Ad likes to posts
        foreach ($posts as $key => $value) {
            $posts[$key]->likes = DB::table('post_like')->where('idPost', '=', $value->idPost)->count() ?? 0;
        }

        return $posts;
    }

    //Get all post of the user passed
    public static function getPostsUsu($idUsu){
        $posts = DB::table('post')
        ->join('user', 'user.idUsu', '=', 'post.idUsu')
        ->select('user.name', 'user.img AS userImg', 'user.idUsu', 'post.*')
        ->where('post.idUsu', '=', $idUsu)->get();

        //Ad likes to posts
        foreach ($posts as $key => $value) {
            $posts[$key]->likes = DB::table('post_like')->where('idPost', '=', $value->idPost)->count() ?? 0;
        }

        return $posts;
    }

}
