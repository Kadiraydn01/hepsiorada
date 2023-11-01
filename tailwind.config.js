/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],

  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "#FAFAFA",
        "custom-button": "#E6E6E6",
        "custom-yellow": "#FFCE31",
      },
      screens: {
        sm: "450px",
        md: "768px",
        xl: "1000px",
      },
    },
  },
  plugins: [require("daisyui"), require("tw-elements-react/dist/plugin.cjs")],
};
