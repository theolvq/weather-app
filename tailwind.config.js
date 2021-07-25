module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      orange: '#eb6e4b',
      grey: '#48484a',
      white: '#f2f2f2',
    },
  },
  variants: {
    extend: {},
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
