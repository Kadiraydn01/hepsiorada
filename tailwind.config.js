/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-gray": "#FAFAFA",
        "custom-button": "#E6E6E6",
        "custom-yellow": "#FFCE31",
      },
    },
  },
  plugins: [require("daisyui")],
};
