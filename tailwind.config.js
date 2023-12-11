/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        amazonclon:{
          background : "#EAEDED",
          light_blue: "#232F3A",
          yellow: "#FEBD69",
          DEFAULT:"#131921"
        }
      }
    },
  },
  plugins: [],
}