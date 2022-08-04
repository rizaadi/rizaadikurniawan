/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        "7.5xl": "5.625rem",
      },
      colors: {
        dark: '#222222'
      }
    },
  },
  plugins: [],
};
