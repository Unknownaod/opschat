import "../globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "ChatSphere",
    template: "%s · ChatSphere",
  },
  description:
    "ChatSphere is a modern, secure, real-time messaging platform built for fast and private conversations.",
  themeColor: "#0f172a",
  metadataBase: new URL("chatsphere.opslinksystems.xyz"),
  openGraph: {
    title: "ChatSphere",
    description:
      "Secure, fast, and modern messaging for real-time communication.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
