/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        background: {
          headerBg: "#161616",
          homeBg: "#efeadf",
          buttonBg: "#486fff",
        },
        text:{
          buttonText: "#f5f5f5"
        }
      },
    },
  },
  plugins: [],
};
