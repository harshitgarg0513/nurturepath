import React, { useState, useEffect } from "react";
import axios from "axios";
import { X, MessageCircle, Send } from "lucide-react";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // Chatbot visibility
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([]);
  const [input, setInput] = useState("");
  const [startupCategory, setStartupCategory] = useState<string | null>(null);
  const [questions, setQuestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (startupCategory) {
      setMessages([
        { text: `Thanks! Based on ${startupCategory}, here are some process guide questions.`, sender: "bot" },
      ]);

      axios
        .post("/api/chatbot", { message: "get_questions", startupCategory })
        .then((res) => setQuestions(res.data.questions || []));
    }
  }, [startupCategory]);

  const sendMessage = async (message: string) => {
    if (!startupCategory) return;

    setMessages((prev) => [...prev, { text: message, sender: "user" }]);
    setLoading(true);

    try {
      const response = await axios.post("/api/chatbot", { message, startupCategory });

      setMessages((prev) => [...prev, { text: response.data.response, sender: "bot" }]);
    } catch {
      setMessages((prev) => [...prev, { text: "Error fetching response.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-md w-full p-4">
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <h2 className="text-lg font-semibold">Startup AI Assistant</h2>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} className="text-gray-400 hover:text-gray-200" />
              </button>
            </div>

            {!startupCategory ? (
              <div className="mt-4">
                <h3 className="text-md font-medium">What's your startup category?</h3>
                <input
                  type="text"
                  className="w-full mt-2 p-2 border border-gray-700 rounded bg-gray-800 text-white"
                  placeholder="Enter your category..."
                  onKeyDown={(e) => {
                    if (e.key === "Enter") setStartupCategory((e.target as HTMLInputElement).value);
                  }}
                />
              </div>
            ) : (
              <>
                <div className="h-64 overflow-y-auto border border-gray-700 p-2 rounded mt-2">
                  {messages.map((msg, index) => (
                    <div key={index} className={`p-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                      <span
                        className={`inline-block px-3 py-2 rounded ${
                          msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-200"
                        }`}
                      >
                        {msg.text}
                      </span>
                    </div>
                  ))}
                  {loading && <p className="text-gray-400 text-sm">Typing...</p>}
                </div>

                {questions.length > 0 && (
                  <div className="mt-2">
                    <h3 className="text-sm font-medium">Suggested Process Guide Questions:</h3>
                    {questions.map((q, index) => (
                      <button
                        key={index}
                        className="block text-sm p-2 bg-gray-700 hover:bg-gray-600 rounded mt-1 w-full text-left"
                        onClick={() => sendMessage(q)}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                <div className="flex mt-2">
                  <input
                    type="text"
                    className="flex-1 p-2 border border-gray-700 rounded bg-gray-800 text-white"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded ml-2 hover:bg-blue-500" onClick={() => sendMessage(input)}>
                    <Send size={16} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
