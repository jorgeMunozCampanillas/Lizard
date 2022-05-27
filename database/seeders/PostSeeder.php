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
                'script'=>'<script src="https://cdn.tailwindcss.com"></script>',
                'html' => '<!-- background -->
                <div class="relative flex min-h-screen flex-col bg-gradient-to-r from-rose-100 to-teal-100">
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
                'img' => 'fake/uno.jpg',
                'tag' => '1',
            ],
            [
                'script'=>'<script src="https://cdn.tailwindcss.com"></script>',
                'html' => '<div>
                    <form class="m-4 flex">
                        <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="your@mail.com"/>
                        <button class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Subscribe</button>
                    </form>
                </div>',
                'css' => 'h1{color: red ;}',
                'js' => 'console.log("I am a User!")',
                'img' => 'fake/dos.jpg',
                'tag' => '1',
            ],
            [
                'script'=>'<script src="https://cdn.tailwindcss.com"></script>',
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
                'img' => 'fake/tres.jpg',
                'tag' => '1',
            ],
            [
                'script'=>'<script src="https://cdn.tailwindcss.com"></script>',
                'html' => '<!-- This is an example component -->
                <div class="bg-gray-50 flex items-center">
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
                'img' => 'fake/cuatro.jpg',
                'tag' => '1',
            ],
            [
                'script'=>'<script src="https://cdn.tailwindcss.com"></script>',
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
                'img' => 'fake/cinco.jpg',
                'tag' => '1',
            ],
            [
                'script'=>'<script src="https://cdn.tailwindcss.com"></script>',
                'html' => '<!-- component -->
                <!-- This is an example component -->
                <div class="flex justify-center min-h-screen from-gray-100 via-gray-300 to-slate-200 bg-gradient-to-br">
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
                'img' => 'fake/seis.jpg',
                'tag' => '1',
            ],
            [
                'script'=>"<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css' integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T' crossorigin='anonymous'></script>",
                'html'=>'<div class="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
              <div class="alert alert-secondary" role="alert">
                A simple secondary alert—check it out!
              </div>
              <div class="alert alert-success" role="alert">
                A simple success alert—check it out!
              </div>
              <div class="alert alert-danger" role="alert">
                A simple danger alert—check it out!
              </div>
              <div class="alert alert-warning" role="alert">
                A simple warning alert—check it out!
              </div>
              <div class="alert alert-info" role="alert">
                A simple info alert—check it out!
              </div>
              <div class="alert alert-light" role="alert">
                A simple light alert—check it out!
              </div>
              <div class="alert alert-dark" role="alert">
                A simple dark alert—check it out!
              </div>',
              'css' => '',
                'js' => 'console.log("I am a User!")',
                'img' => 'fake/siete.PNG',
                'tag' => '2',
            ],
            [
                'script'=>"<script src='https://code.jquery.com/jquery-3.6.0.js' integrity='sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk='' crossorigin='anonymous'></script>",
                'html'=>'<dl class="dropdown"> 
  
                <dt>
                <a>
                  <span class="hida">Select</span>    
                  <p class="multiSel"></p>  
                </a>
                </dt>
              
                <dd>
                    <div class="mutliSelect">
                        <ul>
                            <li>
                                <input type="checkbox" value="Apple" />Apple</li>
                            <li>
                                <input type="checkbox" value="Blackberry" />Blackberry</li>
                            <li>
                                <input type="checkbox" value="HTC" />HTC</li>
                            <li>
                                <input type="checkbox" value="Sony Ericson" />Sony Ericson</li>
                            <li>
                                <input type="checkbox" value="Motorola" />Motorola</li>
                            <li>
                                <input type="checkbox" value="Nokia" />Nokia</li>
                        </ul>
                    </div>
                </dd>
              <button>Filter</button>
            </dl>',
              'css' => 'body {
                font: normal 14px/100% "Andale Mono", AndaleMono, monospace;
                color: #fff;
                padding: 50px;
                width: 300px;
                margin: 0 auto;
                background-color: #374954;
                width:30vw;
              }
              
              a {
                color: #fff;
              }
              
              .dropdown dd,
              .dropdown dt {
                margin: 0px;
                padding: 0px;
              }
              
              .dropdown ul {
                margin: -1px 0 0 0;
              }
              
              .dropdown dd {
                position: relative;
              }
              
              .dropdown a,
              .dropdown a:visited {
                color: #fff;
                text-decoration: none;
                outline: none;
                font-size: 12px;
              }
              
              .dropdown dt a {
                background-color: #4F6877;
                display: block;
                padding: 8px 20px 5px 10px;
                min-height: 25px;
                line-height: 24px;
                overflow: hidden;
                border: 0;
                width: 272px;
              }
              
              .dropdown dt a span,
              .multiSel span {
                cursor: pointer;
                display: inline-block;
                padding: 0 3px 2px 0;
              }
              
              .dropdown dd ul {
                background-color: #4F6877;
                border: 0;
                color: #fff;
                display: none;
                left: 0px;
                padding: 2px 15px 2px 5px;
                position: absolute;
                top: 2px;
                width: 280px;
                list-style: none;
                height: 100px;
                overflow: auto;
              }
              
              .dropdown span.value {
                display: none;
              }
              
              .dropdown dd ul li a {
                padding: 5px;
                display: block;
              }
              
              .dropdown dd ul li a:hover {
                background-color: #fff;
              }
              
              button {
                background-color: #6BBE92;
                width: 302px;
                border: 0;
                padding: 10px 0;
                margin: 5px 0;
                text-align: center;
                color: #fff;
                font-weight: bold;
              }',
                'js' => '$(".dropdown dt a").on("click", function() {
                    $(".dropdown dd ul").slideToggle("fast");
                  });
                  
                  $(".dropdown dd ul li a").on("click", function() {
                    $(".dropdown dd ul").hide();
                  });
                  
                  function getSelectedValue(id) {
                    return $("#" + id).find("dt a span.value").html();
                  }
                  
                  $(document).bind("click", function(e) {
                    var $clicked = $(e.target);
                    if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
                  });
                  
                  $(\'.mutliSelect input[type="checkbox"]\').on(\'click\', function() {
                  
                    var title = $(this).closest(\'.mutliSelect\').find(\'input[type="checkbox"]\').val(),
                      title = $(this).val() + ",";
                  
                    if ($(this).is(\':checked\')) {
                      var html = \'<span title="\' + title + \'">\' + title + \'</span>\';
                      $(\'.multiSel\').append(html);
                      $(".hida").hide();
                    } else {
                      $(\'span[title="\' + title + \'"]\').remove();
                      var ret = $(".hida");
                      $(\'.dropdown dt a\').append(ret);
                  
                    }
                  });',
                'img' => 'fake/ocho.PNG',
                'tag' => '4',
            ],
            
        ];

        $usu = $code = $idPost = null;

        for ($i=0; $i < 20; $i++) { 
    
            $usu = $faker->numberBetween(1,5);
            $code = $faker->numberBetween(0,7);
            $idPost = DB::table('post')->insertGetId(
                [
                    'idUsu' => $usu,
                    'postName' => 'Component '.$faker->word(),
                    'script' => $codes[$code]['script'],
                    'html' => $codes[$code]['html'],
                    'css' => $codes[$code]['css'],
                    'js' => $codes[$code]['js'],
                    'img' => $codes[$code]['img'],
                    'views' => $faker->numberBetween(0, 100),
                    'created_at' => date("Y-m-d H:i:s"),
                    'updated_at' => date("Y-m-d H:i:s")
                ]
            );

            DB::table('post_tag')->insert([
              'idPost' => $idPost,
              'idTag' => $codes[$code]['tag'],
            ]);
        }
    }
}
