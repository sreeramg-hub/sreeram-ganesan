import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Blue-dominant brand palette
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa', // light blue — gradients, highlights
          500: '#3b82f6', // primary accent
          600: '#2563eb', // hover states
          700: '#1d4ed8', // pressed states
        },
        // Dark background scale — driven by CSS custom properties for theme switching
        surface: {
          950: 'rgb(var(--surface-950) / <alpha-value>)',
          900: 'rgb(var(--surface-900) / <alpha-value>)',
          800: 'rgb(var(--surface-800) / <alpha-value>)',
          700: 'rgb(var(--surface-700) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'Cascadia Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563eb, #3b82f6, #60a5fa)',
        'gradient-brand-text': 'linear-gradient(135deg, #60a5fa, #3b82f6, #93c5fd)',
        'gradient-card': 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(96,165,250,0.04))',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-down':  'fadeDown 0.5s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow':'bounce 3s ease-in-out infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%':   { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.15)',
        'glow-blue-lg': '0 0 60px rgba(59, 130, 246, 0.25)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}

export default config
