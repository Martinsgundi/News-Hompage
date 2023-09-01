/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/script.js",
  ],
  theme: {
    screens: {
      "md": "768px",
      "lg": "1040px",
    },
    extend: {
      colors: {
        primary: {
          softOrange: "hsl(35, 77%, 62%)",
          softRed: "hsl(5, 85%, 63%)",
        },
        neutral: {
          offWhite: "hsl(36, 100%, 99%)",
          grayishBlue: "hsl(233, 8%, 79%)",
          darkGrayishBlue: "hsl(236, 13%, 42%)",
          veryDarkBlue: "hsl(240, 100%, 5%)",
        }
      },
      fontFamily: {
        Inter: ["Inter"]
      }
    },
  },
  plugins: [],
}