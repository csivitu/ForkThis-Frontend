/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      padding: {
        "1/2": "50%",
        full: "100%",
      },
      colors: {
        gray: {
          900: "#0f1011",
        },
      },
      minWidth: {
        14: "3.5rem",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
