import { useState } from "react";

const IngredientCalculator = () => {
  const [ingredient, setIngredient] = useState("Rice");
  const [quantity, setQuantity] = useState(1);
  const [basePeople, setBasePeople] = useState(2);
  const [targetPeople, setTargetPeople] = useState(4);

  const result = ((quantity / basePeople) * targetPeople).toFixed(2);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
      <h1 className="text-4xl font-bold text-orange-600 mb-2">
        🧮 Ingredient Calculator
      </h1>

      <p className="text-gray-500 mb-8">
        Adjust ingredient quantity instantly 🍳
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-2 font-semibold text-orange-600">
            Ingredient
          </label>

          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            className="w-full border border-orange-200 rounded-2xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-orange-600">
            Quantity
          </label>

          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full border border-orange-200 rounded-2xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-orange-600">
            Original People
          </label>

          <input
            type="number"
            value={basePeople}
            onChange={(e) => setBasePeople(Number(e.target.value))}
            className="w-full border border-orange-200 rounded-2xl px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold text-orange-600">
            Target People
          </label>

          <input
            type="number"
            value={targetPeople}
            onChange={(e) => setTargetPeople(Number(e.target.value))}
            className="w-full border border-orange-200 rounded-2xl px-4 py-3"
          />
        </div>
      </div>

      <div className="mt-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-8 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-2">🍽️ Required Quantity</h2>

        <p className="text-5xl font-extrabold">{result}</p>

        <p className="mt-2 text-lg">units of {ingredient}</p>
      </div>
    </div>
  );
};

export default IngredientCalculator;
