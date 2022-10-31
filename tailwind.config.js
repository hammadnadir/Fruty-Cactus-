/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsc: "360px",
      xss:"280px",
      xsm:"414px",
      xxsm:"390px",
      xmd:"540px",
      xxs:"375px",
      s:"360px",
      ...defaultTheme.screens
      
    },
    extend: {
      // keyframes: {
      //   wiggle: {
      //     "0%, 100%": { transform: "rotate(-3deg)" },
      //     "50%": { transform: "rotate(3deg)" }
      //   }
      // },
      // animation: {
      //   wiggle: "wiggle 200ms ease-in-out"
      // }
    },
  },
  plugins: [],
}
