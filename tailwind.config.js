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
        primary: '#FF69B4', // Hot Pink
        'primary-dark': '#FF1493', // Deep Pink
        secondary: '#FFB6C1', // Light Pink
        'secondary-dark': '#FF82A9', // Darker Light Pink
        accent: '#FFC0CB', // Pink
        'accent-dark': '#FF8DA1', // Darker Pink
        background: '#FFF0F5', // Lavender Blush
        success: '#4CAF50', // Green
        warning: '#FF9800', // Orange
        danger: '#F44336', // Red
        info: '#2196F3', // Blue
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'Playfair Display', 'serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
        'card': '0 10px 30px 0 rgba(0, 0, 0, 0.05)',
        'hover': '0 20px 40px 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 