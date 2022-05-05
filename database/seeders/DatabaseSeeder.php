<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //USERS
        \App\Models\User::factory(10)->create();

        //Admin User
        DB::table('user')->insert([
            'name' => 'xXJorgeXx',
            'email' => 'j@g.com',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'),
            'img' => 'avatars/jorgeAvatar.png',
            'permissions' => 3,
            'remember_token' => Str::random(10),
            'created_at' => '2022-05-05 14:12:02',
            'updated_at' => '2022-05-05 14:12:02',
        ]);

        //Post
        \App\Models\Post::factory(40)->create();


    }
}
