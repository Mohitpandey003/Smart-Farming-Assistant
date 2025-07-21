import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import axios from "axios";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setOpen(!open);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...messages, userMessage],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );

      const botReply = response.data.choices[0].message;
      setMessages([...messages, userMessage, botReply]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages([
        ...messages,
        userMessage,
        { role: "bot", content: "Error fetching response." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Chatbot Icon Button */}
      <button
        onClick={toggleChat}
        className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all"
      >
        {open ? (
          <X size={28} color="white" />
        ) : (
          <MessageSquare size={28} color="white" />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border">
          <div className="p-4 border-b bg-green-500 text-white font-bold text-center">
            Smart Farming Chatbot
          </div>
          <div className="p-3 h-64 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md text-sm max-w-xs ${
                  msg.role === "user"
                    ? "bg-green-200 self-end ml-auto"
                    : "bg-gray-200 self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about farming..."
              className="flex-grow border p-2 rounded-l-md"
            />
            <button
              onClick={sendMessage}
              className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
