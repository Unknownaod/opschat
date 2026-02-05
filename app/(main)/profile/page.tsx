"use client";

import { useAuthStore } from "@/store/authStore";
import Avatar from "@/components/common/Avatar";

export default function ProfilePage() {
  const { user } = useAuthStore();

  if (!user) return <div className="p-4">No user logged in.</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <Avatar src={user.avatar} size={80} />
      <p className="mt-4 text-lg">Username: {user.username}</p>
      <p className="text-gray-400 mt-1">ID: {user.id}</p>
    </div>
  );
}
