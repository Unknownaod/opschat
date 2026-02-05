"use client";

import { Message } from "@/lib/types";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isMe = message.senderId === "me";

  return (
    <div
      className={`max-w-[60%] p-2 rounded-lg ${
        isMe ? "bg-blue-600 ml-auto text-white" : "bg-gray-700 text-white"
      }`}
    >
      <p>{message.text}</p>
      <span className="text-xs text-gray-300 block text-right mt-1">
        {new Date(message.createdAt).toLocaleTimeString()}
      </span>
    </div>
  );
}
