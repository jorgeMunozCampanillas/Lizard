<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //Users
        $this->call(UserSeeder::class);
        
        //Post
        $this->call(PostSeeder::class);
        try {
            //Try becouse we cant have one register with the same idUsu idPost and with the factory we dont control this
            \App\Models\PostLike::factory(100)->create();
        } catch (\Throwable $e) {}
        try {
            //The same like up
            \App\Models\Followers::factory(20)->create();
        } catch (\Throwable $th) {}
      

    }
}
