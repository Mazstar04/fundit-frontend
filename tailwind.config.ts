import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-theme": "#ED353F",
        primary: {
          100: "#FDF0F1",
          200: "#ED353F",
          400: "#ED353F",
          600: "#e4141f",
        },
        secondary: "#6c1418",
        dark: "#020C0F",
        gray: "#667185",
        "light-gray": "#9DA3A9",
      },
      fontFamily: {
        sans: ["var(--font-buthick)"],
        rethink: ["var(--font-urbanist)"],
        inter: ["var(--font-inter)", "sans-serif"],
        urbanist: ["var(--font-urbanist)"],
      },
    },
  },
  plugins: [],
};
export default config;
