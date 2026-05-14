const cuisineData = {
  Punjab: [
    { name: "Butter Chicken", type: "Non-Veg" },
    { name: "Sarson Ka Saag", type: "Veg" },
    { name: "Chole Bhature", type: "Veg" },
    { name: "Lassi", type: "Veg" },
    { name: "Paneer Tikka", type: "Veg" },
  ],

  Maharashtra: [
    { name: "Vada Pav", type: "Veg" },
    { name: "Misal Pav", type: "Veg" },
    { name: "Puran Poli", type: "Veg" },
    { name: "Pav Bhaji", type: "Veg" },
    { name: "Modak", type: "Veg" },
  ],

  Gujarat: [
    { name: "Dhokla", type: "Veg" },
    { name: "Thepla", type: "Veg" },
    { name: "Khandvi", type: "Veg" },
    { name: "Fafda", type: "Veg" },
    { name: "Undhiyu", type: "Veg" },
  ],

  Rajasthan: [
    { name: "Dal Baati", type: "Veg" },
    { name: "Gatte Ki Sabzi", type: "Veg" },
    { name: "Laal Maas", type: "Non-Veg" },
    { name: "Malpua", type: "Veg" },
    { name: "Ker Sangri", type: "Veg" },
  ],

  Kerala: [
    { name: "Appam", type: "Veg" },
    { name: "Puttu", type: "Veg" },
    { name: "Payasam", type: "Veg" },
    { name: "Avial", type: "Veg" },
    { name: "Fish Curry", type: "Non-Veg" },
  ],

  Karnataka: [
    { name: "Mysore Pak", type: "Veg" },
    { name: "Bisi Bele Bath", type: "Veg" },
    { name: "Kesari Bath", type: "Veg" },
    { name: "Ragi Mudde", type: "Veg" },
    { name: "Neer Dosa", type: "Veg" },
  ],

  Hyderabad: [
    { name: "Hyderabadi Biryani", type: "Non-Veg" },
    { name: "Haleem", type: "Non-Veg" },
    { name: "Mirchi Ka Salan", type: "Veg" },
    { name: "Double Ka Meetha", type: "Veg" },
    { name: "Qubani Ka Meetha", type: "Veg" },
  ],

  "Tamil Nadu": [
    { name: "Dosa", type: "Veg" },
    { name: "Idli", type: "Veg" },
    { name: "Sambar", type: "Veg" },
    { name: "Pongal", type: "Veg" },
    { name: "Chettinad Chicken", type: "Non-Veg" },
  ],

  "West Bengal": [
    { name: "Rasgulla", type: "Veg" },
    { name: "Sandesh", type: "Veg" },
    { name: "Mishti Doi", type: "Veg" },
    { name: "Macher Jhol", type: "Non-Veg" },
    { name: "Kathi Roll", type: "Non-Veg" },
  ],
};

function StateCuisinePage({ selectedState, setCurrentPage }) {
  const dishes = cuisineData[selectedState] || [];

  return (
    <div className="min-h-screen bg-[#1A0A00] text-white px-4 sm:px-8 py-10">
      {/* Back Button */}
      <button
        onClick={() => setCurrentPage("landing")}
        className="bg-orange-500 px-5 py-2 rounded-full hover:bg-red-500 transition-all"
      >
        ← Back
      </button>

      {/* Page Header */}
      <div className="text-center mt-10">
        <h1 className="heading-font text-4xl sm:text-5xl md:text-6xl text-yellow-500">
          {selectedState} Cuisine
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-orange-100 leading-relaxed">
          Explore traditional dishes from {selectedState}.
        </p>
      </div>

      {/* Dish Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-[#2A1200] border border-orange-900 rounded-3xl p-8 hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl text-center">🍛</div>

            <h2 className="heading-font text-3xl text-yellow-400 text-center mt-5">
              {dish.name}
            </h2>

            {/* Veg / Non-Veg Badge */}
            <div className="flex justify-center mt-5">
              <span
                className={`px-4 py-2 rounded-full text-sm font-bold ${
                  dish.type === "Veg"
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {dish.type === "Veg" ? "🟢 Veg" : "🍗 Non-Veg"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StateCuisinePage;
