import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    '.src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          500: '#f5f5dc',
          600: '#deddb9',
          700: '#c6c69a',
        },
        emerald: {
          500: '#009975',
          600: '#007f5f',
          700: '#005f40',
        },
        deepPurple: {
          500: '#72007f',
          600: '#5a0065',
          700: '#43004b',
        },
        warmGold: {
          500: '#cc5500',
          600: '#a44400',
          700: '#7a3300',
        },
      },
      fontFamily: {
        serif: ['var(--font-poppins)'],
        sans: ['var(--font-inter)'],
        // serif: ['var(--font-poppins)', 'serif'],
        // sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'fade-up': 'fadeUp 0.8s ease-out both',
        'typewriter': 'typewriter 2s steps(40) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },

      },
    },
  },
  plugins: [],
}

export default config
