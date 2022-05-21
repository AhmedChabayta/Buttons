module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      hueRotate: {
        "-270": "-270deg",
        270: "270deg",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
