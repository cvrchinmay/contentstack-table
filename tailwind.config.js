/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        15: "60px"
      },
      colors: {
        "menu-active-bg-color": "#F7F9FC",
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}

