<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Admin User
        DB::table('user')->insert([
            'name' => 'xXJorgeXx',
            'email' => 'j@g.com',
            'email_verified_at' => now(),
            'password' => Hash::make('12345678'),
            'img' => 'fake/jorgeAvatar.png',
            'permissions' => 3,
            'remember_token' => Str::random(10),
            'created_at' => '2001-06-29 10:24:00',
            'updated_at' => '2001-06-29 10:24:00',
        ]);
    }
}
