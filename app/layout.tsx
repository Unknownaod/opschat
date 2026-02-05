import "../globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Telegram Clone",
  description: "Telegram Web Clone Frontend",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}
