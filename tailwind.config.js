/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "system-ui"],
        Inter: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        header: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
        about: "0px 27px 78.75px 0px rgba(43, 56, 76, 0.10);",
      },
      colors: {
        "color-white": "#fff",
        "color-gray": "#f0f1f3",
        "text-color-nav": "#333",
        "text-color-primary": "#132238",
        "text-color-secondary": "#556070",
        "text-color-tertiary": "#87909d",
        "text-color-quarter": "#424E60",
        "color-primary-blue": "#325a73",
        "color-secondary-blue": "#2daae1",
        "color-tertiary-blue": "#2bb9d9",
      },
      width: {
        512: "55rem",
      },
      screens: {
        xs: { min: "375px" },
        photo: { min: "920px" },
      },
    },
  },
  plugins: [],
};
