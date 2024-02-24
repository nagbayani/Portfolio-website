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
    },
  },
  plugins: [],
};
