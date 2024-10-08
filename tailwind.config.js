/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kavoon: ["Kavoon", "system-ui"],
        mochiy: ["Mochiy Pop P One", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
