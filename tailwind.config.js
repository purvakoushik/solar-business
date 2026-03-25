/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0F4C81",
          secondary: "#F6A609",
          accent: "#2BAE66",
          bg: "#F8FAFC",
          text: "#0B1320",
          muted: "#5B6472"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 76, 129, 0.1)"
      }
    }
  },
  plugins: []
};