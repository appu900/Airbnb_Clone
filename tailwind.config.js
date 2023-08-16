/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Popins:['Poppins', 'sans-seri']
      },
    },
  },
  plugins: [],
};
