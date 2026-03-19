/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ff8e3c',
      },
      fontFamily: {
        sans: ['"LINE Seed JP"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
