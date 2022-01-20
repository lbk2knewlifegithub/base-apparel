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
        xl: "8rem",
      },
    },
    extend: {
      colors: {
        "red-900": "hsl(0, 93%, 68%)",
        "red-800": "hsl(0, 36%, 70%)",
        "fill-900": "hsl(0, 6%, 24%)",
      },
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
