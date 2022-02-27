<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $categoryIDs = Category::pluck('id');

        return [
            'title' => $this->faker->text(20),
            'content' => $this->faker->paragraphs(5, true),
            'category_id' => $categoryIDs->random(),
        ];
    }
}
