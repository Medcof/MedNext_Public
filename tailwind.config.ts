import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",

        white: "#FFFFFF",
        blue: "#0276FE",
        red: "#FE0202",
        gray: "#7A7A7A",
        redTransparent: "#FE0202A3",

        transparent: "transparent",
        blueInput: "#0075FF",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(#0075FF5C, #0046995C)",
      },
    },
  },
  plugins: [],
};
export default config;
