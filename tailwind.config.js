/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bef-backdrop-blue": "url(/src/assets/bef-backdrop-blue.webp)",
        // "bef-backdrop-orange": "url(/src/assets/bef-backdrop-orange.png)",
      },
      colors: {
        navy: "#212135",
        "light-gray": "#6C6C6C",
        orange: "#FF8660",
        red: "#FF3C63",
        gold: "#FFBF56",
        purple: "#5D3898",
        magenta: "#B43A8F",
      },
      dropShadow: { text: "0 4px 4px rgba(0, 0, 0, 0.25)" },
    },
  },
  plugins: [],
};
