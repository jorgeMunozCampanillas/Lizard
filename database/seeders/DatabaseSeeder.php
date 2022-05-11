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


    }
}
