/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)', // --primary var is based on base.css --primary
        "primary-dark": 'rgb(var(--primary-dark) / <alpha-value>)', // --primary var is based on base.css --primary
        "primary-bright": 'rgb(var(--primary-bright) / <alpha-value>)' // --primary var is based on base.css --primary
      }
    },
  },
  plugins: [],
  safelist: [
    'titanfx',
    'tradenext',
  ],
}
