/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bef-home": "url(/src/assets/homepage/bef-home.png)",
      },
      colors: {
        navy: "#212135",
        "light-gray": "#6C6C6C",
        orange: "#FF8660",
      },
    },
  },
  plugins: [],
};
