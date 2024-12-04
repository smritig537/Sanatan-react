/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'slide-up': 'slideUp 1.5s ease-out',
      },
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        'om-pattern': "url('/src/assets/om.png')",
      },
    },
  },
  plugins: [],
});
