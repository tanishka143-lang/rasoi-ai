import { useState } from "react";

function ContactUsPage({ setCurrentPage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSuccess(true);

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0E1613] text-white">
      {/* ================= HEADER ================= */}

      <div className="border-b border-[#23312B] bg-[#111B18]/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* LOGO */}
          <div
            onClick={() => setCurrentPage("landing")}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div
              className="
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-[#8AD4AA]
              to-[#5FBF8E]
              flex
              items-center
              justify-center
              text-3xl
              shadow-2xl
            "
            >
              🍳
            </div>

            <div>
              <h1 className="text-4xl font-bold tracking-tight">Rasoi AI</h1>

              <p className="text-[#8FA59B] text-sm mt-1">
                Smart Indian Cooking Assistant
              </p>
            </div>
          </div>

          {/* BACK BUTTON */}
          <button
            onClick={() => setCurrentPage("landing")}
            className="
              bg-[#8AD4AA]
              text-black
              px-6
              py-3
              rounded-2xl
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-xl
            "
          >
            ← Back
          </button>
        </div>
      </div>

      {/* ================= HERO ================= */}

      <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <div className="inline-flex items-center gap-3 bg-[#16231E] border border-[#23312B] px-6 py-3 rounded-full">
          <span className="text-2xl">💬</span>

          <p className="text-[#8AD4AA] tracking-wide">CONTACT THE CREATOR</p>
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold mt-10 leading-tight">
          Let's Build Something
          <span className="text-[#8AD4AA]"> Amazing</span>
        </h1>

        <p className="text-[#A4B8AF] text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
          Have suggestions, feedback, collaboration ideas, or just want to say
          hello? Feel free to connect.
        </p>
      </div>

      {/* ================= MAIN SECTION ================= */}

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div
          className="
          bg-[#141F1B]/80
          backdrop-blur-xl
          border
          border-[#26352E]
          rounded-[40px]
          overflow-hidden
          shadow-[0_0_50px_rgba(0,0,0,0.4)]
        "
        >
          <div className="grid lg:grid-cols-2">
            {/* ================= LEFT SIDE ================= */}

            <div className="p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#26352E]">
              {/* PROFILE */}
              <div className="flex items-center gap-6">
                <div
                  className="
                  w-32
                  h-32
                  rounded-full
                  bg-gradient-to-r
                  from-[#8AD4AA]
                  to-[#5FBF8E]
                  flex
                  items-center
                  justify-center
                  text-6xl
                  shadow-[0_0_40px_rgba(138,212,170,0.35)]
                "
                >
                  👩‍💻
                </div>

                <div>
                  <h2 className="text-5xl font-bold">Tanishka Shahdev</h2>

                  <p className="text-[#A4B8AF] mt-4 text-2xl">
                    Creator of Rasoi AI
                  </p>
                </div>
              </div>

              {/* MESSAGE */}
              <div
                className="
                mt-16
                border-l-4
                border-[#5FBF8E]
                pl-8
              "
              >
                <p className="text-[#D5E2DC] text-3xl italic leading-relaxed">
                  "I built Rasoi AI to make Indian cooking smarter, easier, and
                  more accessible for everyone using AI."
                </p>
              </div>

              {/* CONNECT */}
              <div className="mt-16">
                <h3 className="text-4xl font-bold mb-10">Connect With Me</h3>

                {/* EMAIL CARD */}
                <div
                  className="
                  bg-[#0E1613]
                  border
                  border-[#26352E]
                  rounded-3xl
                  p-6
                  flex
                  items-center
                  gap-5
                  hover:border-[#5FBF8E]
                  transition-all
                  duration-300
                "
                >
                  <div
                    className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-[#1B2A24]
                    flex
                    items-center
                    justify-center
                    text-4xl
                  "
                  >
                    ✉️
                  </div>

                  <div>
                    <p className="text-[#8AD4AA] text-lg">Email Address</p>

                    <p className="text-2xl mt-2 break-all">
                      tanishkashahdev5@gmail.com
                    </p>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="grid grid-cols-2 gap-5 mt-10">
                  <a
                    href="https://www.linkedin.com/in/tanishka-shahdev-b2602028b/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-[#0E1613]
                      border
                      border-[#26352E]
                      rounded-3xl
                      p-6
                      text-center
                      hover:border-[#5FBF8E]
                      hover:scale-105
                      transition-all
                    "
                  >
                    <div className="text-5xl">💼</div>

                    <p className="mt-4 text-xl">LinkedIn</p>
                  </a>

                  <a
                    href="https://github.com/tanishka143-lang"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      bg-[#0E1613]
                      border
                      border-[#26352E]
                      rounded-3xl
                      p-6
                      text-center
                      hover:border-[#5FBF8E]
                      hover:scale-105
                      transition-all
                    "
                  >
                    <div className="text-5xl">💻</div>

                    <p className="mt-4 text-xl">GitHub</p>
                  </a>
                </div>
              </div>
            </div>

            {/* ================= RIGHT SIDE ================= */}

            <div className="p-10 lg:p-14">
              <h2 className="text-5xl font-bold">Send a Message</h2>

              <p className="text-[#A4B8AF] mt-5 text-xl leading-relaxed">
                Feel free to reach out for collaborations, ideas, improvements,
                or feedback.
              </p>

              {/* SUCCESS MESSAGE */}
              {success && (
                <div
                  className="
                  mt-8
                  bg-[#1E3A2F]
                  border
                  border-[#5FBF8E]
                  text-[#8AD4AA]
                  px-6
                  py-5
                  rounded-2xl
                  text-lg
                  font-semibold
                "
                >
                  ✅ Message sent successfully!
                </div>
              )}

              {/* FORM */}
              <div className="mt-12 space-y-8">
                {/* NAME */}
                <div>
                  <label className="text-[#D5E2DC] text-lg block mb-4">
                    Your Name
                  </label>

                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="
                      w-full
                      bg-[#0E1613]
                      border
                      border-[#26352E]
                      rounded-3xl
                      px-6
                      py-5
                      text-xl
                      outline-none
                      focus:border-[#5FBF8E]
                      transition-all
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-[#D5E2DC] text-lg block mb-4">
                    Your Email
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    className="
                      w-full
                      bg-[#0E1613]
                      border
                      border-[#26352E]
                      rounded-3xl
                      px-6
                      py-5
                      text-xl
                      outline-none
                      focus:border-[#5FBF8E]
                      transition-all
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-[#D5E2DC] text-lg block mb-4">
                    Your Message
                  </label>

                  <textarea
                    rows="7"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    className="
                      w-full
                      bg-[#0E1613]
                      border
                      border-[#26352E]
                      rounded-3xl
                      px-6
                      py-5
                      text-xl
                      outline-none
                      resize-none
                      focus:border-[#5FBF8E]
                      transition-all
                    "
                  ></textarea>
                </div>

                {/* BUTTON */}
                <button
                  onClick={handleSubmit}
                  disabled={isSending}
                  className="
                    w-full
                    bg-[#8AD4AA]
                    text-black
                    py-5
                    rounded-3xl
                    text-2xl
                    font-bold
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                    shadow-[0_0_30px_rgba(138,212,170,0.25)]
                  "
                >
                  {isSending ? "Sending..." : "🚀 Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
