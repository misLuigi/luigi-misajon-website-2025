/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          navy: "#000080",
          sage: "#AFA8BA",
          maroon: "#6D0000",
          beige: "#BEA6A1",
        },
        // Dark Mode Colors
        dark: {
          bg: "#0a1e3f",
          text: "#C1CBF8",
        },
        700: "#0369A1",
        800: "#075985",
        900: "#0C4A6E",
      },
    },
    backdropBlur: {
      xs: "2px",
    },
    animation: {
      float: "float 6s ease-in-out infinite",
      "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
    keyframes: {
      float: {
        "0%, 100%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-20px)" },
      },
    },
  },
  plugins: [],
};
