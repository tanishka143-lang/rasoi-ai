// src/components/StateFoodSection.jsx

// importing local images
import butterChicken from "../assets/statefoods/butter-chicken.jpeg";

import vadaPav from "../assets/statefoods/vada-pav.jpg";

import dhokla from "../assets/statefoods/dhokla.jpg";

import dalBaati from "../assets/statefoods/dal-baati.jpg";

import appam from "../assets/statefoods/appam.jpg";

import rasgulla from "../assets/statefoods/rasgulla.jpg";

import dosa from "../assets/statefoods/dosa.jfif";

import biryani from "../assets/statefoods/biryani.jpg";

import mysorePak from "../assets/statefoods/mysore-pak.jpg";

// all state data
const stateFoods = [
  {
    state: "Punjab",
    dish: "Butter Chicken",
    image: butterChicken,
  },

  {
    state: "Maharashtra",
    dish: "Vada Pav",
    image: vadaPav,
  },

  {
    state: "Gujarat",
    dish: "Dhokla",
    image: dhokla,
  },

  {
    state: "Rajasthan",
    dish: "Dal Baati",
    image: dalBaati,
  },

  {
    state: "Kerala",
    dish: "Appam",
    image: appam,
  },

  {
    state: "West Bengal",
    dish: "Rasgulla",
    image: rasgulla,
  },

  {
    state: "Tamil Nadu",
    dish: "Dosa",
    image: dosa,
  },

  {
    state: "Hyderabad",
    dish: "Hyderabadi Biryani",
    image: biryani,
  },

  {
    state: "Karnataka",
    dish: "Mysore Pak",
    image: mysorePak,
  },
];

function StateFoodSection({ setCurrentPage, setSelectedState }) {
  return (
    <div className="mt-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="heading-font text-3xl sm:text-4xl md:text-5xl text-yellow-500">
          Taste India State by State
        </h2>

        <p className="mt-4 text-yellow-200 text-sm sm:text-base md:text-lg">
          Explore iconic dishes from India's most loved regions
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {stateFoods.map((food, index) => (
          <div
            key={index}
            // clicking card opens cuisine page
            onClick={() => {
              setSelectedState(food.state);

              setCurrentPage("stateCuisine");
            }}
            className="
                cursor-pointer
                group
                bg-[#2A1200]
                rounded-3xl
                overflow-hidden
                shadow-2xl
                border
                border-orange-900
                hover:scale-105
                transition-all
                duration-500
              "
          >
            {/* Image container */}
            <div className="overflow-hidden h-64">
              {/* Dish Image */}
              <img
                src={food.image}
                alt={food.dish}
                className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    transition-all
                    duration-700
                  "
              />
            </div>

            {/* Card content */}
            <div className="p-6 text-center">
              {/* State Name */}
              <h3 className="heading-font text-2xl text-yellow-400">
                {food.state}
              </h3>

              {/* Dish Name */}
              <p className="mt-3 text-orange-200 text-lg">🍽 {food.dish}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StateFoodSection;
