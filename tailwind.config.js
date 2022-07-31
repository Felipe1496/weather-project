const defaultTheme = require('tailwindcss/defaultTheme');

const tailwindConfig = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
        },
        secondary: {
          dark: '#6AA2D1',
        },
        tertiary: {
          light: '#D2B3C1',
        },
        temperature: {
          cold: '#B6C69B',
          hot: '#AF9F79'
        },
      },

      fontSize: {
        xs: '0.625rem',
        sm: '0.75rem',
        md: '0.875',
        lg: '1rem',
        xl: '1.25rem',
        '2xl': '1.8125rem',
        '3xl': '2.6875rem',
        '4xl': '4rem',
      },

      fontFamily: {
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
