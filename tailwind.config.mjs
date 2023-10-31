const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Sentient-Variable", ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        bounce: {
          "10%": {
            transform: "scaleY(0.3)",
          },
          "30%": {
            transform: "scaleY(1)",
          },
          "60%": {
            transform: "scaleY(0.5)",
          },
          "80%": {
            transform: "scaleY(0.75)",
          },
          "100%": {
            transform: "scaleY(0.6)",
          },
        },
      },
      animation: {
        bounce: "bounce 2.2s ease infinite",
      },
    },
  },
  plugins: [],
};
