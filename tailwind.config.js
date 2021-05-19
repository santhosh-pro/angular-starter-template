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
        primary: colors.orange,
      },
      fontFamily: {
        body: ['nunito', 'mono']
      },
    },
    variants: {
      extend: {
        textColor: ['active'],
      },
    },
    plugins: [],
};