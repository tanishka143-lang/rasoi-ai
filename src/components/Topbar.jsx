function Topbar({ activeSection }) {
  // titles for each section
  const titles = {
    whatCanICook: "What Can I Cook?",
    voiceChef: "Voice Chef",
    savedRecipes: "Saved Recipes",
  };

  return (
    <div
      className="
        h-16
        bg-white
        border-b
        border-orange-200
        flex
        items-center
        justify-start
        px-4
        sm:px-6
      "
    >
      {/* TITLE ONLY */}
      <h1
        className="
          text-xl
          sm:text-2xl
          heading-font
          text-orange-900
        "
      >
        {titles[activeSection]}
      </h1>
    </div>
  );
}

export default Topbar;
