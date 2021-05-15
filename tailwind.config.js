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
        body: ['nunito', 'mono']
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};