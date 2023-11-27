/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: ['Euclid Circular A', 'sans-serif'],
    },
    extend: {
      fontSize: {
        // xs: ['13px', '1'],
      },
      colors: {
        // darkGray: '#2F2F2F',
      },
      backgroundImage: {},
       container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
          xl: '35px',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1270px',
        },
      },
    },
  },
  plugins: [],
}
