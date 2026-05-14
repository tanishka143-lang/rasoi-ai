import { useState } from "react";

const GroceryChecklist = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (!item.trim()) return;

    setList([
      ...list,
      {
        text: item,
        done: false,
      },
    ]);

    setItem("");
  };

  const toggleItem = (index) => {
    const updated = [...list];
    updated[index].done = !updated[index].done;
    setList(updated);
  };

  const deleteItem = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 border border-orange-100 w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-2">
        🛒 Grocery Checklist
      </h1>

      <p className="text-gray-500 mb-6 text-sm sm:text-base">
        Organize your cooking ingredients easily ✨
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Add grocery item..."
          className="w-full border border-orange-200 rounded-2xl px-4 py-3 outline-none focus:ring-4 focus:ring-orange-200"
        />

        <button
          onClick={addItem}
          className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold whitespace-nowrap"
        >
          Add
        </button>
      </div>

      <div className="space-y-3">
        {list.map((grocery, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-orange-50 border border-orange-100 rounded-2xl px-4 sm:px-5 py-4"
          >
            <div className="flex items-center gap-3 min-w-0">
              <input
                type="checkbox"
                checked={grocery.done}
                onChange={() => toggleItem(index)}
                className="w-5 h-5 shrink-0"
              />

              <p
                className={`text-base sm:text-lg break-words ${
                  grocery.done ? "line-through text-gray-400" : "text-gray-700"
                }`}
              >
                {grocery.text}
              </p>
            </div>

            <button
              onClick={() => deleteItem(index)}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroceryChecklist;
