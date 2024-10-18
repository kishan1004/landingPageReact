/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },

      rotate: {
        1: "1deg",
      },

      animation: {
        "spin-slow": "spin 10s linear infinite",
      },

      // keyframes: {
      //   glow: {
      //     "0%, 100%": { opacity: 1, transform: "scale(1)" },
      //     "50%": { opacity: 0.5, transform: "scale(1.2)" },
      //   },
      // },
      // animation: {
      //   glow: "glow 1s ease-in-out infinite",
      // },
      // boxShadow: {
      //   glow: "0 0 8px 2px rgba(255, 255, 255, 0.8)",
      // },
    },
  },
  plugins: [],
};
