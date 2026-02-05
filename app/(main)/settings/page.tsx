"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";

export default function SettingsPage() {
  const { user, logout } = useAuthStore();
  const [theme, setTheme] = useState("light");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      {user && <p className="mb-4">Logged in as {user.username}</p>}

      <div className="mb-4">
        <label className="mr-2">Theme:</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="bg-gray-700 p-2 rounded text-white"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <button onClick={logout} className="bg-red-600 p-2 rounded">
        Logout
      </button>
    </div>
  );
}
