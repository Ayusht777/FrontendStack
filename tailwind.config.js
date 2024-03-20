/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Bg: "#111213",
        Logo: "#DAED6F",
        Nav: "#1A1C1D",
        Border :"#404040",
        
      },
    },
  },
  plugins: [],
};
