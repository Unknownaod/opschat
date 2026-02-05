"use client";

import { useChatStore } from "@/store/chatStore";

export default function Sidebar() {
  const { chats, activeChatId, setActiveChat } = useChatStore();

  return (
    <div className="w-72 bg-gray-800 border-r border-gray-700 flex flex-col">
      <h1 className="text-xl font-bold p-4 border-b border-gray-700">Chats</h1>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setActiveChat(chat.id)}
            className={`p-4 cursor-pointer hover:bg-gray-700 ${
              chat.id === activeChatId ? "bg-gray-700" : ""
            }`}
          >
            {chat.title}
          </div>
        ))}
      </div>
    </div>
  );
}
