import { create } from "zustand";
import { User } from "@/lib/types";

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ user: null });
  },
}));
