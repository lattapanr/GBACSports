/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        darklarch: ["DarkLarch", "serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        black: "#1a1a1a",
        transparent: "transparent",
        current: "currentColor",
        green: "#1b3630",
        "light-yellow": "#e6e0af",
        blue: "#111f5a",
        ans: "#d9d9d9",
        ast: "#47449d",
        gis: "#38761d",
        ppip: "#b7b7b7",
        "ans-purple": "#6a207f",
        red: "#d92028",
        "sisb-blue": "#0080bd",
        bcb: "#6a324b",
        "bcb-yellow": "#ffbf36",
        lfib: "#eb5296",
        "lfib-blue": "#024788",
        s107: "#ff0000",
        "s107-blue": "#11559c",
        tsi: "#ff9c37",
        vis: "#07a47c",
        wcib: "#fcc30f",
      },
      screens: {
        laptop: "1000px",
      },
    },
  },
  plugins: [flowbite.plugin()],
});
