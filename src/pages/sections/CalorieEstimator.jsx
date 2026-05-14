import { useState } from "react";

const CalorieEstimator = () => {
  const [food, setFood] = useState("");
  const [calories, setCalories] = useState(null);

  const estimateCalories = () => {
    if (!food.trim()) return;

    const randomCalories = Math.floor(Math.random() * 500) + 100;
    setCalories(randomCalories);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border border-orange-100 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-2">
        🔥 Calorie Estimator
      </h1>

      <p className="text-gray-500 mb-8 text-sm sm:text-base">
        Estimate calories for your meal 🍛
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter food name"
          className="w-full border border-orange-200 rounded-2xl px-4 py-3 outline-none focus:ring-4 focus:ring-orange-200"
        />

        <button
          onClick={estimateCalories}
          className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold whitespace-nowrap"
        >
          Calculate
        </button>
      </div>

      {calories && (
        <div className="mt-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-6 sm:p-8 text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            🍽️ Estimated Calories
          </h2>

          <p className="text-5xl sm:text-6xl font-extrabold">{calories}</p>

          <p className="mt-3 text-base sm:text-lg break-words">
            calories in {food}
          </p>
        </div>
      )}
    </div>
  );
};

export default CalorieEstimator;
