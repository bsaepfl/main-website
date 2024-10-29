import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat"],
      Playfair: ["Playfair Display"],
    },
    extend: {
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
      colors: {
        dark: {
          100: "#011829",
          200: "#DB9679",
          300: "#E4C7BB",
          400: "#0B42B0",
          450: "#4CA3FF",
          500: "#EEEEEE",
          600: "#EA580C",
          700: "#008AFF",
          800: "#EAF7FF",
          900: "#1D273B",
        },
        light: {
          100: "#F9F9F9",
          200: "#393E46",
          300: "#FFD369",
          400: "#FFFBE7",
        },
      },
      dropShadow: {
        "3xl": "0px 0px 7px rgba(11, 90, 176, 0.3)",
        "4xl": "0px 0px 5px rgba(0, 0, 0, 1)",
        "5xl": [
          "11px 11px 12px rgba(11, 90, 176, 0.25)",
          "-11px -11px 12px rgba(11, 90, 176, 0.25)",
          "11px -11px 12px rgba(11, 90, 176, 0.25)",
          "-11px 11px 12px rgba(11, 90, 176, 0.25)",
        ],
        "6xl": "1px 0 10px rgba(234 88 12)",
        "6bxl": "1px 0 10px #0B42B0",
      },
    },
  },
  plugins: [],
};
export default config;
