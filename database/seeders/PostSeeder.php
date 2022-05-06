<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $faker = \Faker\Factory::create();

        $codes = [
            [
                'html' => '<!-- background -->
                            <div class="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
                            <!-- card -->
                            <div class="mx-auto flex w-96 flex-col justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60">
                                <!-- img -->
                                <img class="aspect-video w-96 rounded-t-2xl object-cover object-center" src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <!-- text information -->
                                <div class="p-4">
                                <small class="text-blue-400 text-xs">Automobile company</small>
                                <h1 class="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                                <p class="text-sm tracking-tight font-light text-slate-400 leading-6">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
                                </div>
                            </div>
                            </div>',
                'css' => 'h1{color: red ;}',
                'js' => 'console.log("I am a User!")',
                'img' => 'fake/uno.jpg'
            ],
            [
                'html' => '<div>
                                <form class="m-4 flex">
                                    <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
                                    <button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
                                </form>
                            </div>',
                'css' => 'h1{color: red ;}',
                'js' => 'console.log("I am a User!")',
                'img' => 'fake/dos.jpg'
            ],
            [
                'html' => '<div class="-m-2 text-center">
                                <div class="p-2">
                                <div class="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
                                    <span class="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">Pink</span>
                                    <span class="inline-flex px-2">Donec sit amet neque risus. Pellentesque leo mauris, dictum et ligula in.</span>
                                </div>
                                </div>
                                
                                <div class="p-2">
                                <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-sm">
                                    <span class="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Purple</span>
                                    <span class="inline-flex px-2">Aliquam condimentum, odio ac finibus fermentum neque risus.</span>
                                </div>
                                </div>
                                
                                <div class="p-2">
                                <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
                                    <span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">Indigo</span>
                                    <span class="inline-flex px-2">Praesent ex nibh, laoreet id luctus vitae, porttitor at turpis. </span>
                                </div>
                                </div>
                            </div>',
                'css' => 'h1{color: red ;}',
                'js' => 'console.log("I am a User!")',
                'img' => 'fake/tres.jpg'
            ],
            [
                'html' => '<!-- This is an example component -->
                            <div class="h-screen w-screen bg-gray-50 flex items-center">
                                <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
                                        <div class="w-full lg:w-1/2 mx-8">
                                            <div class="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
                                        <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                                            Sorry we couldnt find the page youre looking for
                                        </p>
                                        
                                        <a href="#" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">back to homepage</a>
                                </div>
                                    <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
                                    <img src="https://user-images.githubusercontent.com/43953425/166269493-acd08ccb-4df3-4474-95c7-ad1034d3c070.svg" class="" alt="Page not found">
                                    </div>
                                
                                </div>
                            </div>',
                'css' => 'h1{color: red ;}',
                'js' => 'console.log("I am a User!")',
                'img' => 'fake/cuatro.jpg'
            ],
            [
                'html' => '<!-- component -->
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-blue-300 w-52 h-72 m-8 static rounded-lg ">
                                    <div class="bg-white w-52 h-72 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                                        <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
                                        <hr class="m-4 rounded-2xl border-t-2">
                                        <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
                                    </div>
                                </div>
                                <div class="bg-green-300 w-52 h-72 m-8 static rounded-lg ">
                                    <div class="bg-white w-52 h-72 hover:-m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                                        <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
                                        <hr class="m-4 rounded-2xl border-t-2">
                                        <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
                                    </div>
                                </div>
                                <div class="bg-red-300 w-52 h-72 m-8 static rounded-lg ">
                                    <div class="bg-white w-52 h-72 hover:m-2 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                                        <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
                                        <hr class="m-4 rounded-2xl border-t-2">
                                        <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
                                    </div>
                                </div>
                                <div class="bg-yellow-300 w-52 h-72 m-8 static rounded-lg ">
                                    <div class="bg-white w-52 h-72 m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
                                        <h1 class="m-4 text-2xl font-bold">Wat is Lorem Ipsum?</h1>
                                        <hr class="m-4 rounded-2xl border-t-2">
                                        <p class="m-4 text-sm">Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak</p>
                                    </div>
                                </div>
                            </div>',
                'css' => 'h1{color: red ;}',
                'js' => 'console.log("I am a User!")',
                'img' => 'fake/cinco.jpg'
            ],
            [
                'html' => '<!-- component -->
                <!-- This is an example component -->
                <div class="flex items-center justify-center min-h-screen from-gray-100 via-gray-300 to-slate-200 bg-gradient-to-br">
                    <div class="p-32">
                  <button type="button" class="flex items-center rounded-lg bg-indigo-500 px-4 py-2 text-white" disabled>
                    <svg class="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span class="font-medium subpixel-antialiased">Processing...</span>
                  </button>
                </div>
                
                </div>',
                'css' => 'h1{color: red ;}',
                'js' => 'console.log("I am a User!")',
                'img' => 'fake/seis.jpg'
            ],
        ];

        for ($i=0; $i < 20; $i++) { 
    
            $usu = $faker->numberBetween(1,5);
            $code = $faker->numberBetween(0,5);
            DB::table('post')->insert(
                [
                    'idUsu' => $usu,
                    'html' => $codes[$code]['html'],
                    'css' => $codes[$code]['css'],
                    'js' => $codes[$code]['js'],
                    'img' => $codes[$code]['img'],
                    'created_at' => date("Y-m-d H:i:s"),
                    'updated_at' => date("Y-m-d H:i:s")
                ]
            );
            
        }
    }
}
