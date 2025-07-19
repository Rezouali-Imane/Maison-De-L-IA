/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      pixel: ['"Press Start 2P"', 'monospace'],
    },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
