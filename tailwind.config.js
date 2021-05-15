const colors = require('tailwindcss/colors')
module.exports = {
    important: true,
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
      colors: {
        primary: colors.green,
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};