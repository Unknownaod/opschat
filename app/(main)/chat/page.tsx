"use client";

import { useEffect } from "react";
import { useChatStore } from "@/store/chatStore";
import { fetchChats } from "@/services/api/chat.service";
import { fetchMessages } from "@/services/api/message.service";
import { onNewMessage } from "@/services/socket/chat.socket";
import MessageList from "@/components/chat/MessageList";
import MessageInput from "@/components/chat/MessageInput";
import Sidebar from "@/components/layout/Sidebar";

export default function ChatPage() {
  const { chats, setChats, activeChatId, setActiveChat, messages, addMessage } = useChatStore();

  useEffect(() => {
    fetchChats().then(setChats);
  }, [setChats]);

  useEffect(() => {
    if (!activeChatId) return;
    fetchMessages(activeChatId).then((msgs) => msgs.forEach(addMessage));
    onNewMessage((msg) => {
      if (msg.chatId === activeChatId) addMessage(msg);
    });
  }, [activeChatId, addMessage]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <MessageList messages={activeChatId ? messages[activeChatId] || [] : []} />
        <MessageInput
          onSend={(text) =>
            activeChatId &&
            fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/chats/${activeChatId}/messages`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ text }),
            }).then((res) => res.json()).then(addMessage)
          }
        />
      </div>
    </div>
  );
}
