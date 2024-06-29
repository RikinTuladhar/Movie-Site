/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1A1826',
        secondary: '#0F0E16',
        btnColor: '#C99DFC',
        navColor:`#251F35`
      }
    },
  },
  plugins: [],
}