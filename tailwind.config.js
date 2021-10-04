module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'background': '#222831',
        'off-dark': '#393E46',
        'primary': '#FFD369',
        'off-white': '#EEEEEE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
