/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-fade": "rotateFade 2s ease-out forwards",
        "pop-up": "popUp 1s ease-out forwards",
      },
      keyframes: {
        rotateFade: {
          "0%": {
            transform: "rotate(0deg)",
            opacity: "0",
          },
          "100%": {
            transform: "rotate(-90deg)",
            opacity: "1",
          },
        },
        popUp: {
          "0%": {
            transform: "translateY(30px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
