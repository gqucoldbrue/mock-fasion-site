/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    module exports: {
    theme: {
      extend: {
        colors: {
          'magazine-gold': '#FFD700',
        },
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
          serif: ['var(--font-playfair-display)', 'serif'],
        },
        fontSize: {
          '6xl': '4rem',
          '7xl': '5rem',
          '8xl': '6rem',
        },
      },
    },
    plugins: [],
  }
  
  