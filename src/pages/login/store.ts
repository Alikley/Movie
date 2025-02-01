import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface AuthStore {
  user: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: false,
      login: () => set(() => ({ user: true })),
      logout: () => set(() => ({ user: false })),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useAuthStore;
