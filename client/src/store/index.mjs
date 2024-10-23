import { create } from "zustand";

const useStore = create((set) => ({
    theme: localStorage.getItem("theme") ?? "light",
    user: JSON.parse(localStorage.getItem("user")) ?? null,

    setTheme: (value) => set({ theme: value }),
    setCredentials: (user) => set({ user }),
    signOut: () => {
        localStorage.removeItem("user");
        set({ user: null });
    }
}));

export default useStore;
