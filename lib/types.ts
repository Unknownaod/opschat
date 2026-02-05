export type ID = string;

export interface User {
  id: ID;
  username: string;
  avatar?: string;
  lastSeen?: string;
}

export interface Chat {
  id: ID;
  title: string;
  type: "dm" | "group" | "channel";
  members?: User[];
  lastMessage?: Message;
}

export interface Message {
  id: ID;
  chatId: ID;
  senderId: ID;
  text: string;
  createdAt: string;
  status: "pending" | "sent" | "seen";
}
