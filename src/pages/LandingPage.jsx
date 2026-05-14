// src/pages/LandingPage.jsx

import StateFoodSection from "../components/StateFoodSection";

function LandingPage({ setCurrentPage, setSelectedState }) {
  return (
    <div className="min-h-screen bg-[#1A0A00] text-white overflow-hidden relative pb-20">
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse top-0 left-0"></div>

      <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-yellow-500/10 rounded-full blur-3xl bottom-0 right-0"></div>

      {/* ================= HERO SECTION ================= */}

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 sm:w-20 h-[2px] bg-yellow-600"></div>

            <span className="text-yellow-500 text-xl sm:text-2xl">🌶</span>

            <div className="w-12 sm:w-20 h-[2px] bg-yellow-600"></div>
          </div>

          <h1
            className="
              heading-font
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              text-yellow-500
              leading-tight
            "
            style={{
              textShadow: "0 0 20px rgba(255,200,0,0.5)",
            }}
          >
            RasoiGhar AI
          </h1>

          <p
            className="
              mt-4
              italic
              heading-font
              text-[#FFF8E7]
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
            "
          >
            Aapki Apni Smart Rasoi
          </p>

          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-10 sm:w-16 h-[2px] bg-yellow-600"></div>

            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>

            <div className="w-10 sm:w-16 h-[2px] bg-yellow-600"></div>
          </div>

          {/* ================= HERO CARD ================= */}

          <div
            className="
              mt-10
              w-full
              max-w-lg
              mx-auto
              bg-[#2A1200]
              rounded-3xl
              p-5
              sm:p-8
              shadow-2xl
              border
              border-orange-900
            "
          >
            <div className="relative flex justify-center">
              <div className="absolute -top-8 sm:-top-10 flex gap-2 sm:gap-3">
                <div className="w-2 sm:w-3 h-8 sm:h-10 bg-white/30 rounded-full animate-bounce"></div>

                <div className="w-2 sm:w-3 h-10 sm:h-14 bg-white/20 rounded-full animate-bounce delay-100"></div>

                <div className="w-2 sm:w-3 h-9 sm:h-12 bg-white/30 rounded-full animate-bounce delay-200"></div>
              </div>

              <div className="text-6xl sm:text-7xl md:text-8xl">🍲</div>
            </div>

            <p className="mt-6 text-yellow-300 text-sm sm:text-base md:text-lg">
              🌶 Discover recipes from your pantry
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
              <div className="bg-orange-500/20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                AI Powered
              </div>

              <div className="bg-orange-500/20 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm">
                Cooking Timer
              </div>
            </div>
          </div>

          <button
            onClick={() => setCurrentPage("intro")}
            className="
              mt-10
              bg-gradient-to-r
              from-orange-500
              to-red-600
              px-6
              sm:px-8
              md:px-10
              py-3
              md:py-4
              rounded-full
              text-base
              md:text-lg
              hover:scale-105
              transition-all
              duration-300
              shadow-2xl
            "
          >
            Enter Rasoi AI →
          </button>

          <div className="mt-10 text-center text-yellow-100">
            <p className="text-xs sm:text-sm md:text-base">
              Trusted by home cooks across India 🇮🇳
            </p>

            <p className="mt-2 text-sm sm:text-base">
              ⭐⭐ Loved by 10,000+ families⭐⭐
            </p>
          </div>
        </div>
      </div>

      {/* ================= STATE FOOD SECTION ================= */}

      <StateFoodSection
        setCurrentPage={setCurrentPage}
        setSelectedState={setSelectedState}
      />

      {/* ================= ABOUT SECTION ================= */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="heading-font text-4xl md:text-5xl text-yellow-500">
              More Than Just Recipes
            </h2>

            <p className="mt-6 text-orange-100 leading-relaxed text-lg">
              RasoiGhar AI is your smart kitchen companion designed for Indian
              households. Cook using ingredients available at home with AI
              guidance.
            </p>

            <p className="mt-6 text-orange-100 leading-relaxed text-lg">
              From North Indian curries to South Indian breakfasts, explore
              every region of India .
            </p>
          </div>

          <div className="bg-[#2A1200] rounded-3xl p-10 border border-orange-900 shadow-2xl">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-4xl">🧠</div>

                <div>
                  <h3 className="text-2xl text-yellow-400 heading-font">
                    AI Suggestions
                  </h3>

                  <p className="mt-2 text-orange-100">
                    Get recipes instantly from available ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CREATOR SECTION ================= */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 mt-24">
        <div
          className="
            bg-[#2A1200]
            rounded-3xl
            border
            border-orange-900
            p-8
            md:p-12
            shadow-2xl
          "
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center text-5xl">
              👩‍💻
            </div>

            <div>
              <h2 className="text-4xl font-bold text-white">
                Tanishka Shahdev
              </h2>

              <p className="text-orange-200 text-xl mt-1">
                Creator of RasoiGhar AI
              </p>
            </div>
          </div>

          <div className="mt-10 border-l-4 border-orange-700 pl-6">
            <p className="text-orange-100 italic text-xl leading-[2.2rem]">
              "I built RasoiGhar AI to bring the joy of Indian cooking to
              everyone, making it easier to be creative with the ingredients you
              have. Your feedback is what helps this platform grow. Thank you
              for being a part of this journey!"
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 text-orange-100 text-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📧</span>

              <p>tanishkashahdev5@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>

              <p>+91 8340787327</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}

      <footer className="mt-24 bg-[#1A120D] border-t border-orange-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-5xl">🍲</span>

            <h2 className="text-5xl font-bold text-white">RasoiGhar AI</h2>
          </div>

          <p className="mt-8 text-orange-100 text-xl max-w-2xl mx-auto leading-relaxed">
            Your smart kitchen assistant for turning leftover ingredients into
            delightful meals.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-10 text-lg text-orange-200">
            <a
              href="https://www.linkedin.com/in/tanishka-shahdev-b2602028b/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition-all"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/tanishka143-lang"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition-all"
            >
              GitHub
            </a>
          </div>

          <p className="mt-12 text-orange-300 text-lg">
            © 2026 RasoiGhar AI | Developed with ♥ by Tanishka Shahdev.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
