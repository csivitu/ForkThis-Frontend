/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      height: {
        "1/10": "10%",

        "9/10": "90%",
      },
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      colors: {
        gray: {
          900: "#0f1011",
          250: "#D9D9D9",
        },
        HTpink: {
          900: "#9092FF",
        },
        HTpurple: {
          900: "#170F1E",
        },
        ghwhite: {
          100: "#FEFEFE",
        },
      },
      minWidth: {
        14: "3.5rem",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
