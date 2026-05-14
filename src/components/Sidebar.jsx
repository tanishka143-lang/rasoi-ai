function Sidebar({
  setCurrentPage,
  activeSection,
  setActiveSection,
  sidebarOpen,
  setSidebarOpen,
}) {
  const handleSectionChange = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        ></div>
      )}

      <div
        className={`
          fixed md:static top-0 left-0 z-50
          w-72 h-screen overflow-y-auto
          bg-[#1A0A00] text-white p-6
          flex flex-col justify-between shadow-2xl
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div>
          {/* MOBILE CLOSE BUTTON */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden mb-5 bg-red-500 px-4 py-2 rounded-xl"
          >
            ✕ Close
          </button>

          {/* LOGO */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
              🍳 Rasoi AI
            </h1>

            <p className="text-orange-200 mt-2 text-sm">
              Smart Indian Cooking Assistant ✨
            </p>
          </div>

          <div className="h-[1px] bg-orange-800 my-8"></div>

          {/* MENU */}
          <div className="space-y-3">
            <button
              onClick={() => handleSectionChange("whatCanICook")}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all font-semibold ${
                activeSection === "whatCanICook"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "hover:bg-orange-500/20"
              }`}
            >
              🍲 What Can I Cook?
            </button>

            <button
              onClick={() => handleSectionChange("aiChef")}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all font-semibold ${
                activeSection === "aiChef"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "hover:bg-orange-500/20"
              }`}
            >
              🤖 AI Chef Chat
            </button>

            <button
              onClick={() => handleSectionChange("timer")}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all font-semibold ${
                activeSection === "timer"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "hover:bg-orange-500/20"
              }`}
            >
              ⏰ Cooking Timer
            </button>

            <button
              onClick={() => handleSectionChange("grocery")}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all font-semibold ${
                activeSection === "grocery"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "hover:bg-orange-500/20"
              }`}
            >
              🛒 Grocery Checklist
            </button>

            <button
              onClick={() => handleSectionChange("calculator")}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all font-semibold ${
                activeSection === "calculator"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "hover:bg-orange-500/20"
              }`}
            >
              🧮 Ingredient Calculator
            </button>

            <button
              onClick={() => handleSectionChange("calories")}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all font-semibold ${
                activeSection === "calories"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "hover:bg-orange-500/20"
              }`}
            >
              🔥 Calorie Estimator
            </button>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-6">
          <button
            onClick={() => {
              setCurrentPage("landing");
              setSidebarOpen(false);
            }}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 transition-all duration-300 py-4 rounded-2xl font-bold shadow-lg"
          >
            ← Back To Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
