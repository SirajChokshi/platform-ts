export function getNextTheme(theme: string) {
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  if (theme === "system") {
    if (systemTheme === "dark") {
      return "light";
    }
    return "dark";
  }

  if (theme === "dark") {
    if (systemTheme === "dark") {
      return "system";
    }
    return "light";
  }

  if (theme === "light") {
    if (systemTheme === "dark") {
      return "dark";
    }
    return "system";
  }

  return "system";
}

export const THEME_TO_LABEL = {
  system: "Auto",
  light: "Light",
  dark: "Dark",
};

export type Theme = keyof typeof THEME_TO_LABEL;
