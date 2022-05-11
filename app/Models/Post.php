<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Post extends Model
{
    use HasFactory;
    protected $table='post';
    protected $primaryKey = 'idPost';

    protected $fillable = ['idUsu','html','css','js', 'img'];

    public function user(){
        return $this->belongsTo('App\Models\User', 'idUsu', 'idUsu')->get(['idUsu', 'name', 'email', 'img']);
    }

}
