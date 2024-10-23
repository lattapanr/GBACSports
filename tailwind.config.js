/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["Proximanova", "sans-serif"],
      },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',

        },screens: {
          'laptop': '1000px',

        },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
});
