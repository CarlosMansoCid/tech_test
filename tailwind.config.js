/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': ' 2px 6px 7px 0px  #709DDA;',
      }
    },
    colors: {
      transparent: 'transparent',
      'darkBlue': '#001853',
      'lightBlue': '#2E53A3',
      'mediumBlue': '#2D509E',
      'shadowBlue': '#709DDA',
      'white' : '#ffffff',
      'black' : '#000000'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '900px',
      xl: '1440px',
    },

  },
  plugins: [],
}
