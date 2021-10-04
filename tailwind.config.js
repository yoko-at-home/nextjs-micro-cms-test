module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/static/images/laurel.png')",
      },
      // fontFamily: {
      //   sans: ["calibri", "Noto Sans", "Noto Sans JP", "sans-serif"],
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
