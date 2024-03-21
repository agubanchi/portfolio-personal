/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Onest: ["Onest", "sans-serif"],
      },
      colors: {
        darkMode: "#1d1d1d",
        deepGreen: "#00562b",
      },
    },
  },
  plugins: [],
};
