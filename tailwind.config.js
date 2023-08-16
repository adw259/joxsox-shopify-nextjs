/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("tailwind-aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        futura: ["Futura", "sans-serif"],
      },
      colors: {
        "color-primary-dark": "#0c2643",
        "color-primary-medium": "#0f4582",
        "color-primary-light": "#59a5fa",
        "color-primary-sky": "#e4f1fe",
      },

      keyframes: {
        moveup: {
          "0%": { "margin-top": "30px", opacity: "0.3" },
          "50%": { "margin-top": "15px", opacity: "0.5" },
          "100%": { "margin-top": "0px", opacity: "1" },
        },
        moveup2: {
          "0%": { "margin-top": "50px", opacity: "0.0" },
          "50%": { "margin-top": "50px", opacity: "0.0" },
          "75%": { "margin-top": "30px", opacity: "0.5" },
          "100%": { "margin-top": "0px", opacity: "1" },
        },
      },
      /*       keyframes: {
        slideover: {
          "0%": { opacity: "0px" },
          "2%": { left: "0px", opacity: "1" },
          "22.5%": { left: "-600px", opacity: "1" },
          "45%": { left: "-600px", opacity: "1" },
          "47.5%": { opacity: "0.6" },
          "50%": { left: "-1200px", opacity: "1" },
          "70%": { left: "-1200px", opacity: "1" },
          "72.5%": { opacity: "0.6" },
          "75%": { left: "-1800px", opacity: "1" },
          "95%": { opacity: "1" },
          "98%": { left: "-1800px", opacity: "0" },
          "100%": { left: "0px", opacity: "0" },
        },
      }, */
      animation: {
        moveUp: "moveup .5s linear",
        moveUp2: "moveup2 1s linear",
        /* slideOver: "slideover 25s infinite" */
      },
    },
  },
  plugins: [
    ({ addUtilities, addComponents }) => {
      addUtilities({
        ".joxsox-section-heading": {
          "@apply md:text-[2.5rem] md:leading-[2.5rem] lg:text-[4rem] lg:leading-[4rem] font-futura font-bold tracking-wide uppercase":
            {},
        },
        ".joxsox-section-caption": {
          "@apply text-[2rem] font-futura font-light leading-8 text-color-primary-light capitalize":
            {},
        },
        ".category-box-title": {
          "@apply text-color-primary-medium font-light text-[1.5rem] leading-6 uppercase":
            {},
        },
      });
    },
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen 2xl": {
            maxWidth: "1400px",
          },
        },
      });
    },
  ],
};
