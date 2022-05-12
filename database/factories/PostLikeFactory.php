<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostLikeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'idPost' => $this->faker->numberBetween(1,20),
            'idUsu' => $this->faker->numberBetween(1, 5),
        ];
    }
}
