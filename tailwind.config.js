/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./assets/**/*.{css,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00ADB5",
          black: "#222831",
          gray: "#393E46",
          white: "#EEE",
        },
        // body: "#17171F",
        // "selected-text": "#A3A3FF",
        // theme: "#3F3FFF",
        // nav: "#404053",
        // secondary: "#9191A4",
        // badge: "#3F3F51",
        // "input-border": "#565666",
        // input: "#2A2A35",
      },
    },
  },
  plugins: [],
};
