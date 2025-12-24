import { heroui } from "@heroui/theme";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-right": {
          "0%": { transform: "translateX(25px)" },
          "10%": { transform: "translateX(-20px)" },
          "20%": { transform: "translateX(15px)" },
          "30%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
          "70%": { transform: "translateX(-5px)" },
          "90%": { transform: "translateX(3px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-25px)" },
          "10%": { transform: "translateY(20px)" },
          "20%": { transform: "translateY(-15px)" },
          "30%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
          "70%": { transform: "translateY(5px)" },
          "90%": { transform: "translateY(-3px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "slide-down-more": {
          "0%": { transform: "translateY(-500px)" },
          "30%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
          "70%": { transform: "translateY(5px)" },
          "90%": { transform: "translateY(-3px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "slide-up-hide": {
          "0%": { transform: "translateY(0px)" },

          "100%": { transform: "translateY(-500px)" },
        },
        "slide-left-hide": {
          "0%": { transform: "translateX(200px)" },

          "100%": { transform: "translateX(-200px)" },
        },
        "left-right": {
          "0%, 100%": { transform: "translateX(+30px)" },
          "50%": { transform: "translateX(0px)" }, // یا مقدار دلخواه
        },
      },
      animation: {
        "left-right": "left-right 3s ease-in-out infinite",
        "left-right-fast": "left-right 1s ease-in-out infinite",
        "slide-right": "slide-right 5s ease-in-out ",
        "slide-down": "slide-down 2s ease-in-out ",
        "slide-down-more": "slide-down-more 2s ease-in-out ",
        "slide-up-hide": "slide-up-hide 1s ease-in-out forwards ",
        "slide-left-hide": "slide-left-hide 1s ease-in-out forwards ",
      },
      screens: {
        xsm: "426px",
      },
      colors: {
        background: {
          light: "#ffffff",
          dark: "#121212",
        },
        foreground: "var(--foreground)",
        danger: "#c52f33",
      },
      fontSize: {
        responsiveH1: "clamp(2rem, 1.8vw, 3rem)",
        responsiveH2: "clamp(1.6rem, 1.4vw, 2.6rem)",
        responsiveH3: "clamp(1.2rem, 1.1vw, 2.2rem)",
        responsiveH4: "clamp(.8rem, .8vw, 1.8rem)",
        responsiveH5: "clamp(.6rem, 0.5vw, 1.4rem)",
        responsiveP: "clamp(0.5rem, 0.5vw, 1rem)",
        responsivePsm: "clamp(0.3rem, 0.5vw, .7rem)",
        responsiveP2: "clamp(0.2rem, 0.5vw, .7rem)",
        responsiveLogo1: "clamp(1rem, 0.5vw, 4rem)",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
} satisfies Config;
