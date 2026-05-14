import React from "react";

const RecipeModal = ({ recipe, onClose, onVoice }) => {
  if (!recipe) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-white w-full max-w-3xl rounded-3xl overflow-y-auto max-h-[90vh] shadow-2xl">
        {/* IMAGE */}
        <img
          src={recipe.image}
          className="w-full h-72 object-cover"
          alt={recipe.name}
        />

        <div className="p-6">
          {/* TITLE */}
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold text-orange-600">
              {recipe.name}
            </h2>

            <button
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded-xl"
            >
              Close
            </button>
          </div>

          {/* INGREDIENTS */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Ingredients</h3>

            <div className="flex flex-wrap gap-2">
              {recipe.ingredients?.map((item, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-2 rounded-xl text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* STEPS */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-2">Instructions</h3>

            <p className="text-gray-700 whitespace-pre-line">
              {recipe.instructions}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="mt-8 flex gap-4">
            <button
              onClick={() => onVoice(recipe.instructions)}
              className="bg-orange-500 text-white px-5 py-3 rounded-2xl"
            >
              🔊 Voice Chef
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
