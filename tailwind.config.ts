import { Config } from "tailwindcss";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "sd-orange-1": "#FAE6D8",
        "sd-orange-2": "#F6CA9C",
        "sd-orange-4": "#E8833A",
        "sd-yellow-1": "#FDF3D3",
        "sd-yellow-3": "#FABC2C",
        "sd-brown-5": "#8B4937",
        "sd-brown-7": "#653423",
      },
    },
    fontFamily: {
      display: "var(--display-font)",
      body: "var(--body-font)",
    },
    screens: {
      "2xl": { max: "1400px" },

      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "479px" },
    },
  },
  plugins: [],
} satisfies Config;
