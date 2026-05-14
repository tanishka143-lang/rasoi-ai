import React, { useEffect, useState } from "react";

const SavedRecipes = () => {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSaved(data);
  }, []);

  const removeRecipe = (name) => {
    const updated = saved.filter((r) => r.name !== name);
    setSaved(updated);
    localStorage.setItem("savedRecipes", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-orange-600">Saved Recipes</h1>

      {saved.length === 0 ? (
        <p className="mt-6 text-gray-500">No saved recipes yet 🍽️</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {saved.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md"
            >
              <img src={recipe.image} className="h-52 w-full object-cover" />

              <div className="p-5">
                {/* SERIAL NUMBER (NEW) */}
                <p className="text-xs text-gray-400">#{index + 1}</p>

                <h2 className="font-bold text-orange-600">{recipe.name}</h2>

                <p className="text-sm text-gray-600 mt-2">
                  {recipe.instructions?.slice(0, 100)}...
                </p>

                <div className="flex justify-between mt-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-xl">
                    View
                  </button>

                  <button
                    onClick={() => removeRecipe(recipe.name)}
                    className="bg-red-500 text-white px-3 py-1 rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedRecipes;
