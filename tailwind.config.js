/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          md: '728px',
          lg: '984px',
          xl: '1280px'
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}