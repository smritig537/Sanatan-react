/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      backgroundImage : {
        'om-pattern' : "url('/src/assets/om.png')"
      }
    },
  },
  plugins: [],
});
