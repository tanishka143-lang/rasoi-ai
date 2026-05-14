import { useEffect, useState } from "react";

const CookingTimer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            setIsRunning(false);
            alert("⏰ Time's Up Chef! 🍳");
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, seconds, minutes]);

  const startTimer = () => {
    if (minutes > 0 || seconds > 0) {
      setIsRunning(true);
    }
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(5);
    setSeconds(0);
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-orange-100">
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        <div className="text-6xl">⏰</div>

        <div>
          <h1 className="text-4xl font-bold text-orange-600">Cooking Timer</h1>

          <p className="text-gray-500 mt-2">
            Perfect timer for your delicious recipes 🍳
          </p>
        </div>
      </div>

      {/* TIMER */}
      <div className="flex justify-center my-10">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-16 py-10 rounded-3xl shadow-2xl text-7xl font-bold">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </div>
      </div>

      {/* INPUT */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-4">
          <input
            type="number"
            min="0"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
            className="w-32 border border-orange-200 rounded-2xl px-4 py-3 text-center text-2xl outline-none focus:ring-4 focus:ring-orange-200"
          />

          <span className="text-xl font-semibold text-gray-600">Minutes</span>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center gap-5">
        <button
          onClick={startTimer}
          className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-2xl font-bold shadow-lg"
        >
          ▶ Start
        </button>

        <button
          onClick={pauseTimer}
          className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-8 py-4 rounded-2xl font-bold shadow-lg"
        >
          ⏸ Pause
        </button>

        <button
          onClick={resetTimer}
          className="bg-red-500 hover:bg-red-600 transition text-white px-8 py-4 rounded-2xl font-bold shadow-lg"
        >
          🔄 Restart
        </button>
      </div>
    </div>
  );
};

export default CookingTimer;
