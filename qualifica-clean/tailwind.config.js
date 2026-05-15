/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#ffcc29',
        ink: '#242424',
        muted: '#939393',
        'brand-white': '#f9f9f9',
        'brand-gray': '#5f5f5f',
      },
      fontFamily: {
        sora: ['"Sora"', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      borderWidth: {
        15: '15px',
      },
    },
  },
  plugins: [],
}