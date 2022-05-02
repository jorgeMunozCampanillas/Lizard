<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $usu = $this->faker->numberBetween(1,11);
        $color = $this->faker->hexcolor();
        return [
            'idUsu' => $usu,
            'html' => "<h1>Hello World!! by:$usu</h1>",
            'css' => "h1{color: $color ;}",
            'js' => "console.log('I am the user: $usu')"
        ];
    }
}
