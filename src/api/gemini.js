const API_KEY = import.meta.env.VITE_GEMINI_API2;

const PRIMARY_MODEL = "gemini-2.5-flash";
const FALLBACK_MODEL = "gemini-2.0-flash";

export const askGemini = async (prompt, retry = 0, useFallback = false) => {
  try {
    const model = useFallback ? FALLBACK_MODEL : PRIMARY_MODEL;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`,
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

    // Handle API errors
    if (!res.ok) {
      const msg = data?.error?.message || "";

      console.log("API Error:", msg);

      // Switch to fallback model if overloaded
      if (msg.toLowerCase().includes("high demand") && !useFallback) {
        console.log("Switching to fallback model...");

        return askGemini(prompt, 0, true);
      }

      // Retry request
      if (retry < 2) {
        await new Promise((r) => setTimeout(r, 1500));

        return askGemini(prompt, retry + 1, useFallback);
      }

      return `❌ API Error: ${msg}`;
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return "⚠️ No response from Gemini";
    }

    return text;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "❌ Network error";
  }
};
