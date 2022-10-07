/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#FFFFFF',
      secondary: '#F3F3F3',
      'primary-dark': '#111827',
      'secondary-dark': '#000000',
      gray: '#555555',
      blue: '#0072AF',
      lightblue: '#17ABDB',
      green: '#95E616'
    },
    fontSize: {
      12: '12px',
      16: '16px',
      20: '20px',
      24: '24px',
      32: '32px'
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {}
  },
  plugins: []
};
