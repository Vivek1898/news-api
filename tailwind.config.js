module.exports = {
    mode: 'jit',
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'media',
    theme: {
      extend: {
        boxShadow: {
          '2xl': '0 0 5px 10px rgb(207 250 254)',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  