import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1340px',
      },
    },
    extend: {
      fontFamily: { sans: ['var(--font-inter)', 'Arial', 'sans-serif'], serif: ['var(--font-editorial)', 'Georgia', 'serif'] },
      colors: {
        brand: {
          50: '#effefd',
          100: '#c7fdfe',
          200: '#90fafe',
          300: '#4ff1fa',
          400: '#00FFFF',
          500: '#00CCCC',
          600: '#009cb3',
          700: '#057b8f',
          800: '#0c6374',
          900: '#0e5160',
          950: '#033340',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          surface: '#262626',
          card: '#30302E',
          border: '#40403C',
          hover: '#333330',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#AA820A',
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 196, 214, 0.45)',
        'glow-cyan-lg': '0 0 50px -10px rgba(0, 196, 214, 0.55)',
        'glow-gold': '0 0 25px -5px rgba(212, 175, 55, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
