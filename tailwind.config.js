const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pharmeasy_green: {
          DEFAULT: "#10847e",
        },
        pharmeasy_plus: {
          light: "#dcd6ff",
          DEFAULT: "#9f8efa",
        },
      },
    },
  },
  variants: {
    borderColor: ["responsive", "hover", "focus", "active"],
    gradientColorStops: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
