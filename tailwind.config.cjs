/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,html}', './www/**/*.{html,js}'],
  darkMode: false, // or 'media' or 'class',
  content: [ "./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
