/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kavoon: ["Kavoon", "system-ui"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
