module.exports = {
  mode: "jit",
  purge: ["./index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#1A1A1A",
        bluredWhite: "#ECF0FD",
        textBlue: "#1034A6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
