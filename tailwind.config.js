/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-green': {
          800: '#1a472a',
          900: '#0d231c',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#ffffff',
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            a: {
              color: '#34d399',
              '&:hover': {
                color: '#6ee7b7',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};