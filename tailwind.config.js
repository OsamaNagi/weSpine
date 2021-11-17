module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#1A1A1A",
        wineRed: "#A61034",
        textBlue: "#1034A6",
        bluredWhite: "#ECF0FD",
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
