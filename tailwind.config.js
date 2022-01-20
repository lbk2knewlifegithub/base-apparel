const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { join } = require("path");

module.exports = {
  content: [join(__dirname, "src/**/*.{html,ts}")],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "0rem",
      },
    },
    extend: {
      "red-900": "hsl(0, 6%, 24%)",
      "red-800": "hsl(0, 93%, 68%)",
      "red-700": "hsl(0, 36%, 70%)",

      // create custom fonts here
      fontFamily: {
        mono: ["'Josefin Sans'", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1440px",
        },
      });
    }),
  ],
};
