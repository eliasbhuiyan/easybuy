/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#262626',
        'secondary': '#6D6D6D',
        'third': '#979797',
        'bg': "#F5F5F3"
      },
    },
    fontFamily: {
      'dm': ['DM Sans', 'sans-serif'],
      'logo': ['Climate Crisis', 'cursive'],
    },
    container: {
      center: true,
      padding: '16px',
    },
  },
  plugins: [],
}