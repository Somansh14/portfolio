/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Baskervville: ['Baskervville SC','system-ui'],
        Lobster: ['Lobster','sans-serif']
      },
    },
  },
  plugins: [],
}