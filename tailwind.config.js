/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#2A3447',
        'soft-background': '#384256',
        'dark-background': '#222B3C',
        // 'main-color': 'white',
        'text-soft-color': '#DDD',
        'text-dark-color': '#2A3447',
      },
    },
  },
  plugins: [],
}

