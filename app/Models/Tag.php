<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Auth;

class Tag extends Model
{
    use HasFactory;
    protected $table = "tag";
    protected $primaryKey = "idTag";
    public $timestamps = false;

    protected $fillable = ["tag"];


    public static function getPostByTag($tag){
        $posts = DB::select(
            DB::raw("
            Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, `tag`.`tag`,
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            inner join `post_tag` on `post`.`idPost` = `post_tag`.`idPost`
            inner join `tag` on `tag`.`idTag` = `post_tag`.`idTag`
            WHERE `post`.`deleted_at` IS null AND `tag`.`tag` LIKE '%$tag%'
            GROUP BY `post`.`idPost`
            ORDER BY `post`.`postName` DESC;")
        );

        return $posts;
    }

    public static function getOwnTags(){
        $tags = DB::table('tag')
        ->select('tag.tag', 'tag.idTag')
        ->distinct()
        ->join('post_tag', 'tag.idTag', '=', 'post_tag.idTag')
        ->join('post', 'post.idPost', '=', 'post_tag.idPost')
        ->where('post.idUsu', '=', Auth::id())
        ->get();

        return $tags;
    }

    public static function getOwnPostByTag($idTag){
        $posts = DB::select(
            DB::raw("
            Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, `tag`.`tag`,
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            inner join `post_tag` on `post`.`idPost` = `post_tag`.`idPost`
            inner join `tag` on `tag`.`idTag` = `post_tag`.`idTag`
            WHERE `post`.`deleted_at` IS null AND `tag`.`idTag` = '$idTag' AND `user`.`idUsu` = '".Auth::id()."'
            GROUP BY `post`.`idPost`
            ORDER BY `post`.`postName` DESC;")
        );

        return $posts;
    }

}
