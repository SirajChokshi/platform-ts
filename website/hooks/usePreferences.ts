import { create } from "zustand";
import { persist } from "zustand/middleware";

export const PACKAGE_MANAGERS = ["npm", "yarn", "pnpm"] as const;

export type packageManager = typeof PACKAGE_MANAGERS[number];

export const COMMANDS = {
  npm: "npm i",
  yarn: "yarn add",
  pnpm: "pnpm add",
} as const;

interface UserPreferences {
  packageManager: packageManager;
  setPackageManager: (packageManager: packageManager) => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const usePreferences = create(
  persist<UserPreferences>(
    (set) => ({
      packageManager: "npm",
      setPackageManager: (packageManager) => set({ packageManager }),
      theme: "light",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "platform-ts.user-preferences",
    }
  )
);
