/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Paths to your template files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',   // Custom primary color
        secondary: '#9333EA', // Custom secondary color
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),       // Add Tailwind Forms plugin (optional)
    require('@tailwindcss/typography'),  // Add Tailwind Typography plugin (optional)
  ],
}


