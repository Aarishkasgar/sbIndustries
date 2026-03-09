/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0f172a",       // Deep Slate (Footer, Topbar)
          base: "#1e293b",       // Slate 800 (Cards)
          accent: "#f59e0b",     // Amber/Gold 500 (Buttons, Icons)
          hover: "#d97706"       // Amber 600 (Hover effects)
        }
      }
    },
  },
  plugins: [],
}