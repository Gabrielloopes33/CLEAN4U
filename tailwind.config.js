/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1150px', // change the value of lg to 1150px
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'blue': '#0066FF',
      'lightblue': '#d9e8ff',
      'darkpurple': '#241A24',
      'lightgrey': '#F4F5F6',
      'navyblue': '#00224A',
      'darkblue': '#1E013A',
      'offwhite': 'rgba(255, 255, 255, 0.75)',
      'lightblack': 'rgba(0, 0, 0, 0.55)',
      'bluish' : 'rgba(14, 13, 13, 0.75)',
      'testColor' : 'rgba(54, 54, 54, 0.75)',
      'grey': '#909090',
      'bgblue' : '#02398A',
      'darkgrey' : '#747474',
      'faqblue' : '#0861FF',
      'gold' : '#FAAF38',
      'hoblue': '#0000FF',
      'btnblue' : "#267dff",
      'bggrey' : '#DDDDDD',
      'footer' : 'rgba(226, 223, 223, 0.75)',
      'linegrey' : "#C4C4C4"
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '65xl': ['65px', { lineHeight: '1' }],
      '80xl': ['80px', { lineHeight: '6rem' }],
    },
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideFromBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatingImage: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideFromLeft: 'slideFromLeft 0.8s ease-out forwards',
        slideFromBottom: 'slideFromBottom 0.8s ease-out forwards',
        floatingImage: 'floatingImage 3s ease-in-out infinite',
        slideFromRight: 'slideFromRight 0.8s ease-out forwards',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      utilities: {
        '.opacity-0': {
          opacity: '0'
        },
        '.translate-y-full': {
          transform: 'translateY(100%)'
        },
        '.translate-x-full': {
          transform: 'translateX(100%)'
        },
        '.translate-x-negative-full': {
          transform: 'translateX(-100%)'
        }
      }
    },
  },
  plugins: [],
}
