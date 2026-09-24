/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        signature: ["'Great Vibes'", "cursive"],
      },
      colors: {
        ink: { 900: "#070b14", 800: "#0c1220", 700: "#121a2c" },
      },
    },
  },
  plugins: [],
};
