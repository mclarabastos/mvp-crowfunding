import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f00a1",
        secondary: "#ff5c00",
        accent: "#ffca00",
        dark: "#0e0f14",
        dark_text: "#414142",
        white: "#FFFF",
        "background-light": "#FFFF",
        "background-dark": "#070039",
        "surface-light": "#fff2de",
        "surface-dark": "#1F2937",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
