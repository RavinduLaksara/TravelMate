export const COLORS = {
  primary: "#6DA77A",
  secondary: "#A8D5BA",
  accent: "#F5C26B",
  white: "#FFFFFF",
  lightGray: "#F5F5F5",
  mediumGray: "#A3A3A3",
  dark: "#375A4E",
} as const;

export type ColorTypes = keyof typeof COLORS;
