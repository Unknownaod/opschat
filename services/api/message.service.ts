import { API_BASE_URL } from "@/lib/constants";
import { Message } from "@/lib/types";

export async function fetchMessages(chatId: string): Promise<Message[]> {
  const res = await fetch(`${API_BASE_URL}/chats/${chatId}/messages`, {
    headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
  });
  return res.json();
}

export async function sendMessage(chatId: string, text: string): Promise<Message> {
  const res = await fetch(`${API_BASE_URL}/chats/${chatId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: JSON.stringify({ text }),
  });
  return res.json();
}
