/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-blueish-gray": "rgba(18, 23, 35, 255)",
        "highlight-yellow": "rgb(255, 255, 0)"
      },
    },
  },
  plugins: [],
};
