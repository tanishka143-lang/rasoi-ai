import { useState, useEffect } from "react";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import StateCuisinePage from "./pages/StateCuisinePage";
import IntroAnimation from "./pages/IntroAnimation";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [selectedState, setSelectedState] = useState(null);

  useEffect(() => {
    if (currentPage === "intro") {
      const timer = setTimeout(() => {
        setCurrentPage("dashboard");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentPage]);

  return (
    <>
      {currentPage === "landing" && (
        <LandingPage
          setCurrentPage={setCurrentPage}
          setSelectedState={setSelectedState}
        />
      )}

      {currentPage === "intro" && <IntroAnimation />}

      {currentPage === "dashboard" && (
        <Dashboard setCurrentPage={setCurrentPage} />
      )}

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
