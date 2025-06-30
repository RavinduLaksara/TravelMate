export const FONTS = {
  regular: "Poppins-Regular",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export type fontTypes = keyof typeof FONTS;
