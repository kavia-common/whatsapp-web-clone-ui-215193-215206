/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#374151',
        secondary: '#9CA3AF',
        success: '#10B981',
        error: '#EF4444',
        background: '#f9fafb',
        surface: '#ffffff',
        text: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
