/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      gray: "#EAEAEA",
      gray2: "#A9A6A6",
      white: "#FFFFFF",
      dark: "#1E1E1E",
      dark2: "#111111",
    },
    fontFamily: {
      Montserrat: ["Montserrat, sans-serif"],
    },
  },
  plugins: [],
};
