<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = ["#Tailwind", "#Bootstrap", "#CSS Pure", "#JQuery"];
        foreach ($tags as $key => $value) {
            DB::table('tag')->insert(['tag' => $value]);
        }
    }
}
