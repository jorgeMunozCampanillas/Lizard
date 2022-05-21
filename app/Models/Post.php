<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table='post';
    protected $primaryKey = 'idPost';

    protected $fillable = ['idUsu', 'postName','html','css','js', 'img', 'views', 'script', 'fork'];

    public function user(){
        return $this->belongsTo('App\Models\User', 'idUsu', 'idUsu')->get(['idUsu', 'name', 'email', 'img']);
    }

    //Get all posts
    public static function getPost($idPost){
                /*
Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
GROUP_CONCAT(`tag`.`tag`) as 'tags', 
( SELECT COUNT(`post_like`.`idPost`) FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost` ) as `likes` 
from `post` 
inner join `user` on `user`.`idUsu` = `post`.`idUsu` 
inner join `post_tag` on `post`.`idPost` = `post_tag`.`idPost` 
inner join `tag` on `tag`.`idTag` = `post_tag`.`idTag`
WHERE `post`.`deleted_at` IS null AND `post`.`idPost` = 3 
ORDER BY `post`.`views` DESC;
        */
        $posts = DB::select(
            DB::raw("
            Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            WHERE `post`.`deleted_at` IS null
            AND `post`.`idPost` = $idPost
            ORDER BY `post`.`views` DESC;")
        );

        $tags = DB::table('tag')
                ->select('tag.tag')
                ->join('post_tag', 'tag.idTag', '=', 'post_tag.idTag')
                ->where('post_tag.idPost', '=', '3')
                ->get();


        //Ad tags to posts
        $posts["tags"]=[];
        foreach ($tags as $key => $value) {
            array_push($posts["tags"], $value->tag);
        }


        return $posts;
    }

    //Get all posts
    public static function getPosts(){
        $posts = DB::select(
            DB::raw("
            Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            WHERE `post`.`deleted_at` IS null
            ORDER BY `post`.`views` DESC;")
        );

        return $posts;
    }

    //Get all post of the user passed
    public static function getPostsUsu($idUsu){
        
        $posts = DB::select(
            DB::raw("
            Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            WHERE `post`.`idUsu` = $idUsu
            AND `post`.`deleted_at` IS null;")
        );

        return $posts;
    }
    public static function getPostsDeletdUsu($idUsu){
        
        $posts = DB::select(
            DB::raw("
            Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            WHERE `post`.`idUsu` = $idUsu
            AND `post`.`deleted_at` IS NOT null;")
        );

        return $posts;
    }
}
