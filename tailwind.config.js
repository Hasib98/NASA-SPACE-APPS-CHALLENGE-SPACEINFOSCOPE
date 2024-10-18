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
        karma: ["Karma", "serif"],
      },
      // keyframes: {
      //   fadeIn: {
      //     "0%": { opacity: "0" },
      //     // "100%": { opacity: "1" },
      //   },
      // },
      // animation: {
      //   fadeIn: "fadeIn 1s ease-in",
      // },
      // textShadow: {
      //   outline: "2px 2px 0px black", // Customize the shadow for outline effect
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
};
