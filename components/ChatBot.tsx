"use client";
import { useState } from "react";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const res = await fetch("/api/bot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { role: "assistant", content: data.reply };
    setMessages((prev) => [...prev, botMsg]);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white w-14 h-14 rounded-full shadow-2xl text-2xl flex items-center justify-center z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border p-4 z-50">
          <div className="h-60 overflow-y-auto mb-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mb-2 text-sm ${
                  m.role === "user"
                    ? "text-blue-600 text-right"
                    : "text-slate-700"
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-lg px-2 py-1 text-sm"
              placeholder="שאל אותי משהו..."
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg"
            >
              שלח
            </button>
          </div>
        </div>
      )}
    </>
  );
}
