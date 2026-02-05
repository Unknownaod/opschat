"use client";

import { useState } from "react";
import { login } from "@/services/api/auth.service";
import { useAuthStore } from "@/store/authStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuthStore();

  const handleLogin = async () => {
    const res = await login({ email, password });
    localStorage.setItem("accessToken", res.accessToken);
    setUser(res.user);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded mb-2 bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded mb-4 bg-gray-700 text-white"
        />
        <button onClick={handleLogin} className="w-full bg-blue-600 p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}
