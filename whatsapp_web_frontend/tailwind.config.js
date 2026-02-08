/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
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
        // Dark mode colors
        'dark-primary': '#4B5563',
        'dark-secondary': '#6B7280',
        'dark-success': '#10B981',
        'dark-error': '#EF4444',
        'dark-background': '#111827',
        'dark-surface': '#1F2937',
        'dark-text': '#F9FAFB',
        'dark-border': '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
