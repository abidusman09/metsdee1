import { create } from "zustand";

interface UseMenu {
  openMenu: "products" | "templates" | "company" | null;
  setOpenMenu: (value: "products" | "templates" | "company" | null) => void;
}

export const useMenu = create<UseMenu>((set) => ({
  openMenu: null,
  setOpenMenu(value) {
    set({ openMenu: value });
  },
}));
