/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto : ['roboto', 'sans-serif']
    },
    container : {
      center: true,
      padding: '1rem',
      screens: {
        'sm' : "512px",
        'md' : "720px",
        'lg' : "1024px",
        'xl' : "1140px",
        '2xl' : "1320px"
      }
    },
    backgroundImage: {
      'hero-img': "url('/src/assets/bg-image.png')"
    },
  },
  plugins: [],
}

