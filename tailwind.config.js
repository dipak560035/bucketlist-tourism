/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        nepal: {
          dark: '#070A13',      // Deep mystical nighttime blue-black
          slate: '#0F172A',     // Deep slate card backdrop
          gold: '#F59E0B',      // Himalayan dawn gold
          amber: '#D97706',     // Warm temple wood / prayer flag amber
          teal: '#0D9488',      // Glacial lake deep teal
          cyan: '#06B6D4',      // Ice-blue cyan
          emerald: '#10B981',   // Jungle green
          crimson: '#E11D48',   // Rhododendron red
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-light': '0 8px 32px 0 rgba(255, 255, 255, 0.05)',
      }
    },
  },
  plugins: [],
}
