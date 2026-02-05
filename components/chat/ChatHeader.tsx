"use client";

import { useChatStore } from "@/store/chatStore";
import TopBar from "@/components/layout/TopBar";

export default function ChatHeader() {
  const { chats, activeChatId } = useChatStore();
  const activeChat = chats.find((c) => c.id === activeChatId);

  return <TopBar title={activeChat ? activeChat.title : "Select a Chat"} />;
}
