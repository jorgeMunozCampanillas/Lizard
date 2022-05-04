<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post', function (Blueprint $table) {
            $table->increments('idPost');
            $table->unsignedInteger('idUsu');
            $table->string('html');
            $table->string('css')->nullable();
            $table->string('js')->nullable();
            $table->string('img')->nullable();
            $table->string('thumbnail')->nullable();
            $table->timestamps();
        });

        Schema::table('post', function(Blueprint $table){
            $table->foreign('idUsu')
            ->references('idUsu')->on('user')
            ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post');
    }
}
