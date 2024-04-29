import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1240px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "wblue": {
          50: "#EFF6FF",
          100: "#E5F0FF",
          200: "#C2DAFF",
          500: "#297FFF",
        },
        "wyellow": {
          100: "#FFEDAE",
          300: "#FEE17B",
          500: "#EFBA00",
        },
        "wred": {
          100: "#FFEBEF",
          300: "#FFBAC9",
          500: "#FC2F5C",
        },
        "wblack": {
          100: "#576784",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
