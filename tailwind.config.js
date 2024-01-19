/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blueish-gray": "rgba(18, 23, 35, 255)",
        "light-blueish-gray": "rgba(29, 36, 48, 255)",
        "highlight-yellow": "rgb(255, 255, 0)",
      },
    },
  },
  plugins: [],
};
