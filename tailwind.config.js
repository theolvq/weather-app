const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      orange: '#eb6e4b',
      grey: '#48484a',
      white: '#f2f2f2',
      aqua: '#59CDBE',
    },
    screens: {
      xs: '360px',
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
