import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
      },
      colors: {
        'black-stalion': '#0B1A22',
        pylon: '#01A3FF',
        blue: '#008DD8',
        sea: '#245875',
      },
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
        '1xs': '0.75rem',
        s: '0.875rem',
        m: '1rem',
        l: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      screens: {
        // => @media (max-width: 290px) { ... }
        exxsm: { max: '290px' },
        // => @media (max-width: 355px) { ... }
        exsm: { max: '355px' },
        // => @media (max-width: 480px) { ... }
        mxxsm: { max: '480px' },
        // => @media (max-width: 640px) { ... }
        mxsm: { max: '640px' },
        // => @media (max-width: 768px) { ... }
        mxmd: { max: '768px' },
        // => @media (max-width: 1024px) { ... }
        mxlg: { max: '1024px' },
        // => @media (max-width: 1280px) { ... }
        mxxl: { max: '1280px' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
