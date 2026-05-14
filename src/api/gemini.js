const API_KEY = import.meta.env.GEMINI_API; // 🔴 replace after regenerating

const MODEL = "gemini-2.5-flash";

export const askGemini = async (prompt, retry = 0) => {
  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      },
    );

    const data = await res.json();

    console.log("Gemini response:", data);

    // 🔁 Retry if model overloaded
    if (!res.ok) {
      const msg = data?.error?.message || "";

      if (msg.toLowerCase().includes("high demand") && retry < 2) {
        await new Promise((r) => setTimeout(r, 1500));
        return askGemini(prompt, retry + 1);
      }

      return `❌ API Error: ${msg}`;
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return "⚠️ No response from Gemini";
    }

    return text;
  } catch (err) {
    console.error(err);
    return "❌ Network error";
  }
};
