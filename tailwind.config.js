/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        'black-primary': '#11181C',
        'black-secondary': '#687076',
        'white-primary': '#ECEDEE',
        'white-secondary': '#B6BABC',
        'black-tertiary': '#080C0E',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      dropShadow: {
        mobile: '0 -10px 7px  rgba(17, 24, 28, 0.20)',
        mobile_dark: '0 -10px 7px  rgba(17, 24, 28, 0.70)',
        mobile_only_top: '0 -24px 10px #ffffff',
        mobile_only_top_dark: '0 -24px 10px #000000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
