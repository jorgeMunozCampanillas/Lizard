<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFollowersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('followers', function (Blueprint $table) {
            $table->unsignedInteger("following");
            $table->unsignedInteger("follower");
            $table->primary(['following', 'follower']);
            $table->timestamps();
        });

        Schema::table('followers', function (Blueprint $table) {
            $table->foreign('following')->references('idUsu')
            ->on('user')->onDelete('cascade');

            $table->foreign('follower')->references('idUsu')
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
        Schema::dropIfExists('followers');
    }
}
