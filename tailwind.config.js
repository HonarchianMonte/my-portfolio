/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'mxs': { 'max': '426px' },
      'msm': { 'max': '640px' },
      'mmd': { 'max': '768px' },
      'mlg': { 'max': '1024px' },
      'mxl': { 'max': '1280px' },
    }
  },
  plugins: [],
}