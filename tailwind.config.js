/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', // purple-200
        input: 'var(--color-input)', // purple-200
        ring: 'var(--color-ring)', // purple-400
        background: 'var(--color-background)', // purple-50
        foreground: 'var(--color-foreground)', // gray-800
        primary: {
          DEFAULT: 'var(--color-primary)', // purple-400
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // amber-400
          foreground: 'var(--color-secondary-foreground)', // gray-800
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)', // white
        },
        success: {
          DEFAULT: 'var(--color-success)', // green-500
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-500
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-600
          foreground: 'var(--color-error-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)', // gray-400
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // pink-300
          foreground: 'var(--color-accent-foreground)', // gray-800
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // gray-800
        },
        card: {
          DEFAULT: 'var(--color-card)', // white
          foreground: 'var(--color-card-foreground)', // gray-800
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        lg: '1rem',
        md: '0.75rem',
        sm: '0.5rem',
      },
      keyframes: {
        'float-heart': {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        'float-heart-slow': {
          '0%': { transform: 'translateY(0) rotate(0deg) scale(1)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-100vh) rotate(-360deg) scale(1.2)', opacity: '0' },
        },
        'float-heart-fast': {
          '0%': { transform: 'translateY(0) rotate(0deg) scale(0.8)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(180deg) scale(1)', opacity: '0' },
        },
        'confetti-fall': {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(192, 132, 252, 0.4), 0 0 40px rgba(192, 132, 252, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(192, 132, 252, 0.6), 0 0 60px rgba(192, 132, 252, 0.3)',
          },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        'float-heart': 'float-heart 12s ease-in infinite',
        'float-heart-slow': 'float-heart-slow 15s ease-in-out infinite',
        'float-heart-fast': 'float-heart-fast 9s ease-in infinite',
        'confetti-fall': 'confetti-fall 3s ease-in forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}