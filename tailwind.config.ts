import { colors } from "./styles/colors";
// import { typography } from "./styles/typography";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   pretendard: ["Pretendard", "sans-serif"],
      // },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors,
      // ...typography,
    },
  },
  plugins: [],
};
export default config;
