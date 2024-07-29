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
        cards: "0px 23.963px 71.889px 0px rgba(28, 25, 25, 0.16);",
        contactCards: "0px 8.986px 47.926px 0px rgba(28, 25, 25, 0.12);",
        contact: "0px 44.182px 92.856px 0px rgba(0, 0, 0, 0.12);",
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
        "bg-card": "rgba(237, 216, 255, 0.50);",
      },
      width: {
        512: "55rem",
      },
      screens: {
        xs: { min: "375px" },
        photo: { min: "920px" },
      },
      keyframes: {
        slideDownNav: {
          "0%": { transform: "translateY(-100px)", opacity: "0"},
          "100%": { transform: "translateY(0px)", opacity: "1" }
        },

        slideUp: {
          "0%": { transform: "translateY(25px)", opacity: "0"},
          "100%": { transform: "translateY(0px)", opacity: "1" }
        },

        scaleBox: {
          "0%": { transform: "scale(80%)", opacity: "0"},
          // "90%": { transform: "scale(110%)"},
          // "95%": { transform: "scale(90%)"},
          "100%": { transform: "scale(100%)", opacity: "1"}
        }

      },
      animation: {
        "slide-down-nav": "slideDownNav .3s ease",
        "slide-up-2": "slideUp .2s ease both",
        "slide-up-4": "slideUp .2s ease .1s both",
        "slide-up-6": "slideUp .2s ease .2s both",
        "scale-box-1": "scaleBox .3s ease both",
        "scale-box-2": "scaleBox .3s ease .1s both",
        "scale-box-3": "scaleBox .3s ease .2s both",
      }
    },
  },
  plugins: [],
};
