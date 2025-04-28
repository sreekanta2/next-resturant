import { siteConfig } from "@/config/site";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ThemeStoreState {
  theme: string;
  setTheme: (theme: string) => void;
  radius: number;
  setRadius: (value: number) => void;
}

export const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set) => ({
      theme: siteConfig.theme,
      setTheme: (theme) => set({ theme }),
      radius: siteConfig.radius,
      setRadius: (value) => set({ radius: value }),
    }),
    { name: "theme-store", storage: createJSONStorage(() => localStorage) }
  )
);
interface SidebarState {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;

  subMenu: boolean;
  setSubmenu: (value: boolean) => void;

  sidebarBg: string;
  setSidebarBg: (value: string) => void;

  mobileMenu: boolean;
  setMobileMenu: (value: boolean) => void;
}

export const useSidebar = create<SidebarState>()(
  persist(
    (set) => ({
      collapsed: false,
      setCollapsed: (value) => set({ collapsed: value }),

      subMenu: false,
      setSubmenu: (value) => set({ subMenu: value }),

      sidebarBg: siteConfig.sidebarBg,
      setSidebarBg: (value) => set({ sidebarBg: value }),

      mobileMenu: false,
      setMobileMenu: (value) => set({ mobileMenu: value }),
    }),
    { name: "sidebar-store", storage: createJSONStorage(() => localStorage) }
  )
);
