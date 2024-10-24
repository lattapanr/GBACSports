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
          'green': '#1b3630',
          'light-yellow': '#e6e0af',
          'blue': '#111f5a',

        },screens: {
          'laptop': '1000px',

        },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
});
