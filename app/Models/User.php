<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;
use Auth;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = "user";
    protected $primaryKey = "idUsu";

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'permissions',
        'img',
        'created_at',
        'updated_at'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getPosts(){
        return $this->hasMany('App\Models\Post', 'idUsu', 'idUsu')->get();
    }

    public function getLikesGiven(){
        return DB::table('post_like')->select('idPost')->where('idUsu', '=', Auth::id())->get();
    }

    public static function getRandomUserNotFollow(){
        $id = Auth::id();

        $users = DB::select(
            DB::raw("
            Select DISTINCT `user`.`name`, `user`.`img`,  `user`.`idUsu`, 
            (
                SELECT COUNT(`post`.`idPost`) 
                FROM `post` WHERE `post`.`idUsu` = `user`.`idUsu`
            ) as `posts` 
            from `user` 
            WHERE `user`.`idUsu` != 1
            ORDER BY RAND ( )  
            LIMIT 3;")
        );

        return $users;

    }

    public static function getWork(){
        $work = DB::select(
            DB::raw("
            SELECT DAY(`post`.`created_at`) as 'day', COUNT('day') AS 'count' FROM `post`
            WHERE `post`.`idUsu` = ".Auth::id()." AND MONTH(`post`.`created_at`) =  MONTH(CURRENT_DATE())
            GROUP BY DAY(`post`.`created_at`)
            HAVING count('day') > 0;")
        );
        return $work;
    }

}
