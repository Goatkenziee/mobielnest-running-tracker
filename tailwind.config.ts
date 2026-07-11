import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf2f4",
          100: "#fce7eb",
          200: "#f9d0d9",
          300: "#f4a9b9",
          400: "#ed7a94",
          500: "#e34d6f",
          600: "#d12d55",
          700: "#b01f43",
          800: "#931c3a",
          900: "#7d1b35",
          950: "#450a19",
        },
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        quartz: {
          50: "#faf7f8",
          100: "#f5eef0",
          200: "#ebdce1",
          300: "#dcc1c9",
          400: "#c8a0ad",
          500: "#b48191",
          600: "#a06878",
          700: "#865563",
          800: "#704854",
          900: "#603f49",
          950: "#342026",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
