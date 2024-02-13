/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: "#523ccf",
        "white-red-orange": "#fef3ef",
      },
    },
  },
  plugins: [],
};
