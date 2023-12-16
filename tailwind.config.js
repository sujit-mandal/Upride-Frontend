/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'archivo': 'Archivo',
        'open-sans': 'Open Sans',
        'jakarta': 'Plus Jakarta Sans',
        'poppins': 'Poppins',
        'roboto': 'Roboto',
        'roboto-flex': 'Roboto Flex',
      },
    },
  },
  plugins: [],
}

