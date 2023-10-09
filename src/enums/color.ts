import tailwind from "@/../tailwind.config";
import defaultColors from "tailwindcss/colors";
export const Colors = { ...tailwind.theme.extend.colors, ...defaultColors };
export type Color = keyof typeof Colors;
