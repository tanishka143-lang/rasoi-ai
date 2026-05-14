function IntroAnimation() {
  return (
    // full screen animation container
    <div
      className="
        h-screen
        bg-[#1A0A00]
        flex
        items-center
        justify-center
        overflow-hidden
        relative
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          w-96
          h-96
          bg-orange-500/20
          rounded-full
          blur-3xl
          animate-pulse
        "
      ></div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Animated Cooking Pot */}
        <div
          className="
            text-8xl
            animate-spin
          "
          style={{
            animationDuration: "4s",
          }}
        >
          🍲
        </div>

        {/* App Name */}
        <h1
          className="
            mt-8
            text-5xl
            md:text-7xl
            heading-font
            text-yellow-500
          "
          style={{
            textShadow: "0 0 20px rgba(255,200,0,0.5)",
          }}
        >
          Rasoi AI
        </h1>

        {/* Subtitle */}
        <p
          className="
            mt-5
            text-yellow-200
            text-lg
            animate-pulse
          "
        >
          Preparing your smart kitchen...
        </p>

        {/* Loading Bar */}
        <div
          className="
            mt-8
            w-72
            h-3
            bg-white/10
            rounded-full
            overflow-hidden
            mx-auto
          "
        >
          {/* Animated Bar */}
          <div
            className="
              h-full
              bg-gradient-to-r
              from-orange-500
              to-yellow-500
            "
            style={{
              width: "100%",
              animation: "loading 3s linear",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default IntroAnimation;
