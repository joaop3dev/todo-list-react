/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],

  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },

    fontSize: {
      sm: '.75rem',
      md: '.875rem',
      lg: '1rem'
    },

    colors: {
      transparent: 'transparent',
      white: '#fff',
      black: '#000',

      danger: 'E25858',

      blue: {
        300: '#4EA8DE',
        500: '#1E6F9F'
      },

      purple: {
        300: '#8284FA',
        500: '#5E60CE'
      },

      gray: {
        700: '#0D0D0D',
        600: '#1A1A1A',
        500: '#262626',
        400: '#333333',
        300: '#808080',
        200: '#D9D9D9',
        100: '#F2F2F2'
      }
    },
    extend: {},
    plugins: []
  }
}
