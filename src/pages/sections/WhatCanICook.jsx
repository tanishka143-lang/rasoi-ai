import React, { useState } from "react";

const WhatCanICook = () => {
  const [input, setInput] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const getCookingTime = () => {
    return 15 + Math.floor(Math.random() * 20);
  };

  const addIngredient = () => {
    const value = input
      .toLowerCase()
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    setIngredients([...new Set([...ingredients, ...value])]);
    setInput("");
  };

  const removeIngredient = (item) => {
    setIngredients(ingredients.filter((i) => i !== item));
  };

  const findRecipes = async () => {
    if (ingredients.length === 0) return;

    setLoading(true);

    const usedIngredients = ingredients.map((i) => i.toLowerCase());
    let allMeals = [];

    const promises = usedIngredients.map((ing) =>
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`).then(
        (res) => res.json(),
      ),
    );

    const results = await Promise.all(promises);

    results.forEach((data) => {
      if (data.meals) {
        allMeals.push(...data.meals);
      }
    });

    const uniqueMeals = Array.from(
      new Map(allMeals.map((m) => [m.idMeal, m])).values(),
    );

    const limitedMeals = uniqueMeals.slice(0, 12);

    const detailedMeals = await Promise.all(
      limitedMeals.map(async (meal) => {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
        );

        const data = await res.json();
        const full = data.meals[0];

        const recipeIngredients = Object.keys(full)
          .filter((k) => k.includes("strIngredient"))
          .map((k) => full[k]?.toLowerCase())
          .filter(Boolean);

        let matchCount = 0;

        usedIngredients.forEach((ing) => {
          if (recipeIngredients.includes(ing)) {
            matchCount++;
          }
        });

        const matchPercent = Math.round(
          (matchCount / recipeIngredients.length) * 100,
        );

        return {
          ...meal,
          matchPercent: matchPercent || 0,
          cookingTime: getCookingTime(),
        };
      }),
    );

    const filtered = detailedMeals.filter((r) => r.matchPercent > 0);
    filtered.sort((a, b) => b.matchPercent - a.matchPercent);

    setRecipes(filtered);
    setLoading(false);
  };

  const openRecipe = async (meal) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`,
    );

    const data = await res.json();
    const full = data.meals[0];

    setSelectedRecipe({
      id: full.idMeal,
      name: full.strMeal,
      image: full.strMealThumb,
      instructions: full.strInstructions,
      youtube: full.strYoutube,
      ingredients: Object.keys(full)
        .filter((k) => k.includes("strIngredient"))
        .map((k) => full[k])
        .filter(Boolean),
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-orange-600">What Can I Cook?</h1>

      <div className="mt-6 bg-white p-6 rounded-3xl shadow-md space-y-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter ingredients like chicken, paneer, rice.. "
          className="border px-4 py-3 rounded-xl w-full"
        />

        <button
          onClick={addIngredient}
          className="bg-orange-500 text-white px-4 py-2 rounded-xl"
        >
          Add Ingredients
        </button>

        <div className="flex flex-wrap gap-2">
          {ingredients.map((item, i) => (
            <span
              key={i}
              className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full flex gap-2"
            >
              {item}
              <button onClick={() => removeIngredient(item)}>✕</button>
            </span>
          ))}
        </div>

        <button
          onClick={findRecipes}
          className="bg-orange-500 text-white px-6 py-3 rounded-2xl"
        >
          Find Recipes
        </button>
      </div>

      {loading && (
        <p className="text-center mt-6 text-gray-500">Searching recipes...</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {recipes.map((meal) => (
          <div
            key={meal.idMeal}
            onClick={() => openRecipe(meal)}
            className="bg-white rounded-3xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition"
          >
            <img src={meal.strMealThumb} className="h-52 w-full object-cover" />

            <div className="p-5">
              <h2 className="font-bold text-orange-600">{meal.strMeal}</h2>

              <div className="mt-2 flex justify-between text-sm text-gray-600">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  🔥 {meal.matchPercent}% Match
                </span>

                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  ⏱ {meal.cookingTime} min
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-[520px] max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl p-6 border border-orange-200 relative">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute top-3 right-4 text-red-500 text-xl"
            >
              ✕
            </button>

            <img
              src={selectedRecipe.image}
              className="w-full h-52 object-cover rounded-xl"
            />

            <h2 className="text-xl font-bold mt-3 text-orange-600">
              {selectedRecipe.name}
            </h2>

            <h3 className="mt-3 font-semibold text-sm">Ingredients</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              {selectedRecipe.ingredients.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>

            <p className="mt-3 text-gray-600 text-sm">
              {selectedRecipe.instructions}
            </p>

            <div className="flex gap-3 mt-4">
              {selectedRecipe.youtube && (
                <a
                  href={selectedRecipe.youtube}
                  target="_blank"
                  className="bg-blue-500 text-white px-3 py-2 rounded-xl text-sm"
                >
                  Watch Video
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatCanICook;
