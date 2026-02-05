"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { login } from "@/services/api/auth.service"; // replace with register endpoint later

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { setUser } = useAuthStore();

  const handleRegister = async () => {
    const res = await login({ email, password }); // TODO: swap with register API
    localStorage.setItem("accessToken", res.accessToken);
    setUser(res.user);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-800 p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded mb-2 bg-gray-700 text-white"
        />
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
        <button onClick={handleRegister} className="w-full bg-blue-600 p-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}
