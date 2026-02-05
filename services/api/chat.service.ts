import { API_BASE_URL } from "@/lib/constants";
import { Chat } from "@/lib/types";

export async function fetchChats(): Promise<Chat[]> {
  const res = await fetch(`${API_BASE_URL}/chats`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  });
  return res.json();
}

export async function fetchChat(chatId: string): Promise<Chat> {
  const res = await fetch(`${API_BASE_URL}/chats/${chatId}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  });
  return res.json();
}
