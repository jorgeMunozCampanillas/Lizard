<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostLikeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_like', function (Blueprint $table) {
            $table->unsignedInteger('idPost');
            $table->unsignedInteger('idUsu');
            $table->primary(['idPost', 'idUsu']);
        });

        Schema::table('post_like', function (Blueprint $table) {
            $table->foreign('idPost')->references('idPost')
            ->on('post')->onDelete('cascade');

            $table->foreign('idUsu')->references('idUsu')
            ->on('user')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_like');
    }
}
