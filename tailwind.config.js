/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: "#523ccf",
      },
    },
    fontFamily: {
      aileronSemiBold: ["aileronSemiBold", "sans-serif"],
      aileronSemiBoldItalic: ["aileronSemiBoldItalic", "sans-serif"],
      aileronHeavyItalic: ["aileronHeavyItalic", "sans-serif"],
      aileronHeavy: ["aileronHeavy", "sans-serif"],
      aileronThin: ["aileronThin", "sans-serif"],
      aileronRegular: ["aileronRegular", "sans-serif"],
      garamond: ["garamond"],
    },
    fontSize: {
      sm: "0.8rem", // 12.8px
      base: "1rem", // 16px
      xl: "1.25rem", // 20px
      "2xl": "1.563rem", // 25px
      "3xl": "1.953rem", // 31px
      "4xl": "2.441rem", // 39px
      "5xl": "3.052rem", // 49px
      "6xl": "3.52rem", // 49px
      "8xl": "4rem", // 49px
    },
  },
  plugins: [],
};
