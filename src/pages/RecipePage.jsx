// importing hooks from React
import { useState, useEffect } from "react";

// importing pages
import LandingPage from "./pages/LandingPage";

import Dashboard from "./pages/Dashboard";

import StateCuisinePage from "./pages/StateCuisinePage";

import IntroAnimation from "./pages/IntroAnimation";

function App() {
  // stores current page
  const [currentPage, setCurrentPage] = useState("landing");

  // stores selected state
  const [selectedState, setSelectedState] = useState(null);

  // automatically opens dashboard after intro animation
  useEffect(() => {
    // checking if current page is intro
    if (currentPage === "intro") {
      // timer
      const timer = setTimeout(() => {
        // open dashboard
        setCurrentPage("dashboard");
      }, 3000);

      // cleanup timer
      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  return (
    <>
      {/* Landing Page */}
      {currentPage === "landing" && (
        <LandingPage
          setCurrentPage={setCurrentPage}
          setSelectedState={setSelectedState}
        />
      )}

      {/* Intro Animation */}
      {currentPage === "intro" && <IntroAnimation />}

      {/* Dashboard */}
      {currentPage === "dashboard" && (
        <Dashboard setCurrentPage={setCurrentPage} />
      )}

      {/* State Cuisine Page */}
      {currentPage === "stateCuisine" && (
        <StateCuisinePage
          selectedState={selectedState}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default App;
