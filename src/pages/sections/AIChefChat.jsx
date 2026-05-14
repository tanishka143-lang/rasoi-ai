import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { askGemini } from "../../api/gemini";

const AIChefChat = () => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = input;

    // Add user message
    setChat((prev) => [
      ...prev,
      {
        role: "user",
        text: userMsg,
      },
    ]);

    setInput("");
    setLoading(true);

    // 🔥 BETTER PROMPT WITH FORMATTING + EMOJIS
    const prompt = `
You are Rasoi AI 🍳 — a modern Indian cooking assistant.

IMPORTANT RULES:
- Use emojis beautifully
- Use proper headings
- Use bold text
- Use bullet points
- Keep spacing clean
- Make recipes visually attractive
- Keep answers short but informative
- Make responses look premium and modern

FORMAT LIKE THIS:

# 🍛 Recipe Name

## 🧂 Ingredients
- Item 1
- Item 2

## 👨‍🍳 Steps
1. Step one
2. Step two

## 🔥 Pro Tips
- Helpful tip

## 🍽️ Best Served With
- Rice
- Roti

Use cooking emojis naturally throughout the answer.

User Question:
${userMsg}
`;

    const response = await askGemini(prompt);

    // Add AI response
    setChat((prev) => [
      ...prev,
      {
        role: "ai",
        text: response,
      },
    ]);

    setLoading(false);
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <h1 className="text-3xl font-bold text-orange-600 flex items-center gap-2">
        🤖 AI Chef Chat
      </h1>

      {/* CHAT AREA */}
      <div className="bg-white mt-6 rounded-3xl shadow-lg p-5 h-[500px] overflow-y-auto border border-orange-100">
        {chat.length === 0 && (
          <div className="text-center text-gray-400 mt-24">
            🍳 Ask Rasoi AI anything about cooking...
          </div>
        )}

        {chat.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-5 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-5 py-4 rounded-3xl shadow-sm ${
                msg.role === "user"
                  ? "bg-orange-500 text-white"
                  : "bg-orange-50 text-gray-800 border border-orange-100"
              }`}
            >
              {msg.role === "user" ? (
                <p className="whitespace-pre-wrap leading-relaxed">
                  {msg.text}
                </p>
              ) : (
                <div className="prose prose-sm max-w-none prose-headings:text-orange-600 prose-strong:text-red-500">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-orange-50 border border-orange-100 px-4 py-3 rounded-2xl text-gray-500 text-sm animate-pulse">
              🍳 AI Chef is cooking your answer...
            </div>
          </div>
        )}
      </div>

      {/* INPUT AREA */}
      <div className="flex gap-3 mt-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something delicious... 🍜"
          className="flex-1 border border-orange-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <button
          onClick={sendMessage}
          className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 rounded-2xl font-semibold shadow-md"
        >
          Send 🚀
        </button>
      </div>
    </div>
  );
};

export default AIChefChat;
