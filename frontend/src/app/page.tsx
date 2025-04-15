"use client";

import { useState } from "react";

const allIngredients = [
  "Chicken",
  "Ground beef",
  "Eggs",
  "Bacon",
  "Canned tuna",
  "Tofu",
  "Deli meat",
  "Sausages",
  "Hot dogs",
  "Onions",
  "Garlic",
  "Potatoes",
  "Carrots",
  "Bell peppers",
  "Tomatoes",
  "Celery",
  "Spinach",
  "Lettuce",
  "Frozen mixed vegetables",
  "Canned corn",
  "Canned green beans",
  "Canned tomatoes",
  "Bananas",
  "Apples",
  "Lemons",
  "Limes",
  "Oranges",
  "Berries",
  "Canned pineapple",
  "Raisins",
  "Milk",
  "Cheese",
  "Butter",
  "Cream cheese",
  "Sour cream",
  "Yogurt",
  "Heavy cream",
  "Pasta",
  "Rice",
  "Bread",
  "Tortillas",
  "Flour",
  "Sugar",
  "Salt",
  "Pepper",
  "Baking powder",
  "Baking soda",
  "Oats",
  "Peanut butter",
  "Jelly",
  "Canned beans",
  "Broth",
  "Canned soup",
  "Ketchup",
  "Mustard",
  "Mayonnaise",
  "Soy sauce",
  "Hot sauce",
  "BBQ sauce",
  "Vinegar",
  "Olive oil",
  "Vegetable oil",
  "Honey",
  "Maple syrup",
  "Cinnamon",
  "Paprika",
  "Cumin",
  "Chili powder",
  "Italian seasoning",
  "Garlic powder",
  "Onion powder",
  "Oregano"
];

export default function Home() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleIngredient = (ingredient: string) => {
    setSelected((prev) =>
      prev.includes(ingredient)
        ? prev.filter((item) => item !== ingredient)
        : [...prev, ingredient]
    );
  };

  const handleFindRecipes = () => {
    alert(`Finding recipes with: ${selected.join(", ")}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Select Your Ingredients</h1>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {allIngredients.map((ingredient) => (
            <button
              key={ingredient}
              onClick={() => toggleIngredient(ingredient)}
              className={`border rounded-full px-4 py-2 text-sm ${
                selected.includes(ingredient)
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {ingredient}
            </button>
          ))}
        </div>

        <button
          onClick={handleFindRecipes}
          disabled={selected.length === 0}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-gray-300"
        >
          Find Recipes
        </button>
      </div>
    </main>
  );
}
