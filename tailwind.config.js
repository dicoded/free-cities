module.exports = {
  purge: [
    './src/**/*.svelte',
    './public/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'title': ['Lato-Light', 'Arial', 'sans-serif'],
        'note': ['Lato-Italic', 'Arial', 'sans-serif'],
        'montserrat': ['Montserrat-Light', 'Arial', 'sans-serif'],
      },
    },
    minHeight: {
    '0': '0',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    'full': '100%',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
