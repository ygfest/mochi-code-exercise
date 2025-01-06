import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F8F8",
        foreground: "#00060C",
        navTextColor: "#555454",
        activeNavTextColor: "#000000",
        typography: "#71717A",
        borderColor: "#cbcbcb",
        primary: "#6D41E8",
        secondary: "#DD0DB9",
        light: "#c7c7c72c",
        lightHover: "#c7c7c75e",
        cardBg: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
