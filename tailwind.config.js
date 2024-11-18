/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { min: "100px", max: "500px" },
        tablet: { min: "501px", max: "991px" },
        laptop: { min: "992px", max: "1400px " },
        pc: { min: "1501px" },
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
      fontSize: {
        17: "17px",
      },
      margin: {
        110: "-110px",
      },
      width: {
        30: "30%",
        45: "45%",
      },
    },
  },
  plugins: [],
};
