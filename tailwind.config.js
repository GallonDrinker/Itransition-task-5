/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scans your project files for class usage
  ],
  theme: {
    extend: {
      keyframes: {
        bounceIn: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(6, 78, 59, 0.8)' }, // bg-green-900 with 80% opacity
          '50%': { boxShadow: '0 0 20px rgba(6, 78, 59, 1)' }, // bg-green-900 with 100% opacity
        },
      },
      animation: {
        bounceIn: 'bounceIn 1s ease-in-out infinite',
        glow: 'glow 2s infinite',
      },
    },
  },
  plugins: [],
};

