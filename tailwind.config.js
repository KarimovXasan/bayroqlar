/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#111517',
        'grey': '#848484',
        'dark': '#202C36',
        'light-dark': '#2B3844'
      },
      boxShadow: {
        'header': '0px 2px 4px 0px #0000000E',
        'search': '0px 2px 9px 0px #0000000E',
        'cart': '0px 0px 7px 2px #00000008'
      },
      maxWidth: {
        '1280': '1280px'
      }
    },
  },
  plugins: [],
}