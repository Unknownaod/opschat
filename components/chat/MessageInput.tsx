"use client";

import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
}

export default function MessageInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="p-4 border-t border-gray-700 flex">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        className="flex-1 bg-gray-800 text-white p-2 rounded-l"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 px-4 rounded-r hover:bg-blue-500"
      >
        Send
      </button>
    </div>
  );
}
