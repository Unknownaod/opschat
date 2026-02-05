import { io, Socket } from "socket.io-client";
import { WS_BASE_URL } from "@/lib/constants";
import { Message } from "@/lib/types";

let socket: Socket;

export function connectSocket(token: string) {
  socket = io(WS_BASE_URL, {
    auth: { token },
    transports: ["websocket"],
  });
}

export function disconnectSocket() {
  socket?.disconnect();
}

export function joinChat(chatId: string) {
  socket?.emit("chat:join", { chatId });
}

export function leaveChat(chatId: string) {
  socket?.emit("chat:leave", { chatId });
}

export function sendMessageSocket(chatId: string, text: string) {
  socket?.emit("message:send", { chatId, text });
}

export function onNewMessage(cb: (msg: Message) => void) {
  socket?.on("message:new", cb);
}
