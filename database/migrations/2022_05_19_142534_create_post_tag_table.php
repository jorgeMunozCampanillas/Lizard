<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('post_tag', function (Blueprint $table) {
            $table->unsignedInteger('idPost');
            $table->unsignedInteger('idTag');
            $table->primary(['idPost', 'idTag']);
        });

        Schema::table('post_tag', function (Blueprint $table) {
            $table->foreign('idPost')->references('idPost')
            ->on('post')->onDelete('cascade');

            $table->foreign('idTag')->references('idTag')
            ->on('tag')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('post_tag');
    }
}
