/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gerbil: ["Gerbil", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      inset: {
        "100": "28rem",
        "104": "32rem",
      },
      backgroundColor: {
        primary: "#D7EEDD",
      },
    },
  },
  plugins: [],
}

