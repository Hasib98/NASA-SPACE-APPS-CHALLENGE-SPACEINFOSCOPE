/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kavoon: ["Kavoon", "system-ui"],
        mochiy: ["Mochiy Pop P One", "sans-serif"],
        righteous: ["Righteous", "sans-serif"],
        madimione: ["Madimi One", "sans-serif"],
        andika: ["Andika", "sans-serif"],
      },
      // textShadow: {
      //   outline: "2px 2px 0px black", // Customize the shadow for outline effect
      // },
    },
  },
  plugins: [],
  darkMode: "class",
};
