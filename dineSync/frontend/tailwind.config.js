/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montreal: [ "'PP Neue Montreal', sans-serif" ]
      },
      colors: {
        sonicSilver: '#797979',
        onyx: '#383838'
      },
      backgroundImage: {
        'hero-image': "url('/src/assets/hero.webp')",
      }
    },
  },
  plugins: [],
}