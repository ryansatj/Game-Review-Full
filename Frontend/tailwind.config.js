/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue : "#092152",
        customRed : "#fe0000",
      }
    },
  },
  plugins: [],
}

