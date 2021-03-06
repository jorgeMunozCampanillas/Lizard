<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\SoftDeletes;
use Auth;

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

    //Get one posts
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
        $post = DB::select(
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
                ->where('post_tag.idPost', '=', $idPost)
                ->get();



        //Ad tags to posts
        $post[0]->tags=[];
        foreach ($tags as $key => $value) {
            array_push($post[0]->tags, $value->tag);
        }

        // $post = DB::select(
        //     DB::raw("
        //     Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
        //     GROUP_CONCAT(`tag`.`tag`) as 'tags', 
        //     ( SELECT COUNT(`post_like`.`idPost`) FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost` ) as `likes` 
        //     from `post` 
        //     inner join `user` on `user`.`idUsu` = `post`.`idUsu` 
        //     inner join `post_tag` on `post`.`idPost` = `post_tag`.`idPost` 
        //     inner join `tag` on `tag`.`idTag` = `post_tag`.`idTag`
        //     WHERE `post`.`deleted_at` IS null AND `post`.`idPost` = $idPost 
        //     ORDER BY `post`.`views` DESC;")
        // )->groupBy('likes');

        return $post;
    }


    //Get all posts
    public static function getPosts(){
        /*not found well
Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
            ( 
                SELECT GROUP_CONCAT(`tag`.`tag`) FROM `tag`
                inner join `post_tag` on `post`.`idPost` = `post_tag`.`idPost`
            ) as `tags`,
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            WHERE `post`.`deleted_at` IS null
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
            ORDER BY `post`.`views` DESC;")
        );

        
        foreach ($posts as $postKey => $postValue) {
            $tags = DB::table('tag')
            ->select('tag.tag')
            ->join('post_tag', 'tag.idTag', '=', 'post_tag.idTag')
            ->where('post_tag.idPost', '=', $postValue->idPost)
            ->get();
            //Ad tags to posts
            $postValue->tags=[];
            foreach ($tags as $key => $value) {
                array_push($postValue->tags, $value->tag);
            }
        }

        return $posts;
    }

    
    //Get all posts
    public static function getPostsLimit($offset){

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
            ORDER BY `post`.`views` DESC
            LIMIT $offset, 4;")
        );

        
        foreach ($posts as $postKey => $postValue) {
            $tags = DB::table('tag')
            ->select('tag.tag')
            ->join('post_tag', 'tag.idTag', '=', 'post_tag.idTag')
            ->where('post_tag.idPost', '=', $postValue->idPost)
            ->get();
            //Ad tags to posts
            $postValue->tags=[];
            foreach ($tags as $key => $value) {
                array_push($postValue->tags, $value->tag);
            }
        }




        return $posts;
    }

    //Get all post of the user passed
    public static function getPostsUsu($idUsu, $limit){
        //DB::table('POSTS')->select('....')->select('....')->raw(....)->where(....)->get()
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
            AND `post`.`deleted_at` IS null
            LIMIT $limit, 6;")
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

    public static function deleteTags($idPost){
        DB::select(DB::raw("DELETE FROM `post_tag` WHERE `post_tag`.`idPost` = $idPost"));
    }

    public static function getTagsName($name){
        $names = DB::select(DB::raw("SELECT `tag`.`tag` as namee, `tag`.`idTag` as id FROM `tag` 
        WHERE `tag`.`tag` LIKE '%$name%' 
        ORDER BY `tag`.`tag` ASC 
        LIMIT 6"));
        return $names;
    }

    public static function getPostName($name){
        $names = DB::select(DB::raw("SELECT `post`.`postName` as namee, `post`.`idPost` as id FROM `post` 
        WHERE `post`.`postName` LIKE '%$name%' 
        ORDER BY `post`.`postName` ASC 
        LIMIT 6"));
        return $names;
    }

    public static function getProfileName($name){
        $names = DB::select(DB::raw("SELECT `user`.`name` as namee, `user`.`idUsu` as id FROM `user` 
        WHERE `user`.`name` LIKE '%$name%' 
        ORDER BY `user`.`name` ASC 
        LIMIT 6"));
        return $names;
    }

    public static function getPostByName($name){
        $names = DB::select(DB::raw("Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
        (
            SELECT COUNT(`post_like`.`idPost`) 
            FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
        ) as `likes` 
        from `post` 
        inner join `user` on `user`.`idUsu` = `post`.`idUsu`
        WHERE `post`.`deleted_at` IS null AND `post`.`postName` LIKE '%$name%'
        ORDER BY `post`.`postName` ASC;"));
        return $names;
    }

    public static function getPostFeatured(){
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
            ORDER BY `likes` DESC LIMIT 1;")
            );

        return $posts;
    }

    public static function isMyOwn($idPost){
        $assert = DB::table('post')
        ->where('post.idPost', $idPost)
        ->where('post.idUsu', Auth::id())
        ->count();

        return $assert;
    }

    public static function postLoved(){
        $posts = DB::select(
            DB::raw("
            Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*, 
            (
                SELECT COUNT(`post_like`.`idPost`) 
                FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
            ) as `likes` 
            from `post` 
            inner join `user` on `user`.`idUsu` = `post`.`idUsu`
            inner join `post_like` on `post_like`.`idPost` = `post`.`idPost`
            WHERE `post`.`deleted_at` IS null AND `post_like`.`idUsu` = ".Auth::id().";")
            );

        return $posts;
    }


    public static function statistics(){
        $views = DB::table('post')->where('idUsu', Auth::id())->count('post.views');
        $likes = DB::table('post')->join('post_like', 'post.idPost', '=', 'post_like.idPost')->where('post.idUsu', Auth::id())->count();
        $followers = DB::table('post')->join('followers', 'post.idUsu', '=', 'followers.following')->where('post.idUsu', Auth::id())->count();
        $post = DB::select(
            DB::raw("
                Select `user`.`name`, `user`.`img` as `userImg`, `user`.`idUsu`, `post`.*,
                (
                    SELECT COUNT(`post_like`.`idPost`) 
                    FROM `post_like` WHERE `post_like`.`idPost` = `post`.`idPost`
                )*3 + `post`.`views` as `pnt`
                from `post` 
                inner join `user` on `user`.`idUsu` = `post`.`idUsu`
                WHERE `post`.`deleted_at` IS null AND `post`.`idUsu` = ".Auth::id()."
                ORDER BY `pnt` DESC LIMIT 1;
            ")
        );
        return [
            "views" => $views,
            "likes" => $likes, 
            "followers" => $followers,
            "post" => $post,
        ];
    }
}
