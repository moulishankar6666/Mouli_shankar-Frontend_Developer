/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      cyan: "#0c2b2f",
      white: "#fff",
      skyblue: "#b0f9ff",
      trans: "transparent",
      sky: {
        100: "#99e6e6",
        500: "#75e3f0",
        900: "#1adef5",
      },
      black: "#000",
      cardbg: "#0c2b2f",
    },

    extend: {
      boxShadow: {
        "inner-xl": "inset 0 0 60px 10px rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
      });
    }),
  ],
};
