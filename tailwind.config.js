/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      fontSize: {
        '7.5xl': '5.625rem',
      },
      colors: {
        dark: '#000000',
        'black-second': '#111111',
        'black-third': '#101828',
        'black-fourth': '#475467',
        'black-fifth': '#888888',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
