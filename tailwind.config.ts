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
      fontSize: {
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.01em",
            fontWeight: "500",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors,
      boxShadow: {
        // shadow-level-1
        "level-1":
          "0px 2px 8px 0px rgba(33, 38, 49, 0.16), 0px 0px 2px 0px rgba(33, 38, 49, 0.12)",
        "level-2":
          "2px 2px 16px 0px rgba(33, 38, 49, 0.16), 2px 2px 8px 0px rgba(33, 38, 49, 0.12)",
        "level-3":
          "2px 4px 24px 0px rgba(33, 38, 49, 0.28), 4px 4px 12px 0px rgba(33, 38, 49, 0.12)",
      },
      // ...typography,
    },
  },
  plugins: [],
};
export default config;
