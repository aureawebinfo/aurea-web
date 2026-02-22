/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        gold: {
          400: "#FAD643", 
          500: "#D4AF37", 
          600: "#B4941F", 
        },
        emerald: {
          500: "#10B981",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #FAD643 50%, #B4941F 100%)',
      }
    },
  },
  plugins: [],
}