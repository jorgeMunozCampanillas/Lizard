<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class FollowersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {

        $NUMBER_USERS = 5;

        $following = $this->faker->numberBetween(1, $NUMBER_USERS);
        $follower = $this->faker->numberBetween(1, $NUMBER_USERS);

        //For a user dont follow to himself
        if ($following == $follower) {
            $follower==$NUMBER_USERS ? $follower-- : $follower++;
        }

        return [
            'following' => $following,
            'follower' => $follower,
        ];
    }
}
