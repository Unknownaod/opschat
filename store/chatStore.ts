import { create } from "zustand";
import { Chat, Message } from "@/lib/types";

interface ChatState {
  chats: Chat[];
  activeChatId: string | null;
  messages: Record<string, Message[]>;
  setChats: (c: Chat[]) => void;
  setActiveChat: (id: string) => void;
  addMessage: (msg: Message) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  activeChatId: null,
  messages: {},
  setChats: (chats) => set({ chats }),
  setActiveChat: (id) => set({ activeChatId: id }),
  addMessage: (msg) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [msg.chatId]: [...(state.messages[msg.chatId] || []), msg],
      },
    })),
}));
