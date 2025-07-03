export const FONTS = {
  regular: "Inter_400Regular",
  semiBold: "Inter_600SemiBold",
  regPoppins: "Poppins_400Regular",
  boldPoppins: "Poppins_700Bold",
} as const;

export type fontTypes = keyof typeof FONTS;
