/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        slideInLeft: "slideInLeft 1s ease-out",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Adding Rubik font
      },
      colors: {
        heading: "#FFC7ED", // Replace with your hex code
      },
    },
  },
  plugins: [],
};

