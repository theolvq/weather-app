module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'around-md': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '33%': {
            transform: 'translate(-208px, 0)',
          },
          '50%': {
            transform: 'translate(-208px, 44px)',
          },
          '84%': {
            transform: 'translate(0, 44px)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
        'around-sm': {
          '0%': {
            transform: 'translate(0, 0)',
          },
          '33%': {
            transform: 'translate(-88px, 0)',
          },
          '50%': {
            transform: 'translate(-88px, 44px)',
          },
          '84%': {
            transform: 'translate(0, 44px)',
          },
          '100%': {
            transform: 'translate(0, 0)',
          },
        },
      },
      animation: {
        'around-sm': 'around-sm 1s ease-in-out',
        'around-md': 'around-md 1s ease-in-out',
      },
      screens: {
        xs: '360px',
      },
    },
  },
  plugins: [],
};
