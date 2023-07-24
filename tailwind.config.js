/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {

    extend: {
      colors: {
        'main-color': '#5BDCF1',
        'main-color-dark': '#2DAEC4',
        'white-hover': '#F8F8FC',
        'bgColor': '#F8F8FC'
      },
    },
    screens: {
      sm: '500px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],

      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#F0F8FB',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
        },
      },
    },
    plugins: [require('tailwind-scrollbar')],
  }
};