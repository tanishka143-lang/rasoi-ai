import { useState } from "react";

import Sidebar from "../components/Sidebar";

import WhatCanICook from "./sections/WhatCanICook";
import AIChefChat from "./sections/AIChefChat";
import CookingTimer from "./sections/CookingTimer";
import GroceryChecklist from "./sections/GroceryChecklist";

import IngredientCalculator from "./sections/IngredientCalculator";
import CalorieEstimator from "./sections/CalorieEstimator";

function Dashboard({ setCurrentPage }) {
  const [activeSection, setActiveSection] = useState("whatCanICook");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#FFF8E7]">
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-orange-500 text-white px-4 py-3 rounded-xl shadow-lg"
      >
        ☰
      </button>

      {/* SIDEBAR */}
      <Sidebar
        setCurrentPage={setCurrentPage}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN AREA */}
      <div className="flex-1 w-full overflow-y-auto p-4 sm:p-6 md:p-8 pt-20 md:pt-8">
        {activeSection === "whatCanICook" && <WhatCanICook />}

        {activeSection === "aiChef" && <AIChefChat />}

        {activeSection === "timer" && <CookingTimer />}

        {activeSection === "grocery" && <GroceryChecklist />}

        {activeSection === "calculator" && <IngredientCalculator />}

        {activeSection === "calories" && <CalorieEstimator />}
      </div>
    </div>
  );
}

export default Dashboard;
