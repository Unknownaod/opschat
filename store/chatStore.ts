import { create } from "zustand";

export const useChatStore = create((set) => ({
  chats: [],
  activeChatId: null,
  messages: {},

  setChats: (chats) => set({ chats }),
  setActiveChat: (id) => set({ activeChatId: id }),

  addMessage: (chatId, message) =>
    set((state) => ({
      messages: {
        ...state.messages,
        [chatId]: [...(state.messages[chatId] || []), message],
      },
    })),
}));
