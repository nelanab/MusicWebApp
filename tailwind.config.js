module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'backgroundPattern': "url('../img/Shapes.svg')",
        'icon': "url('../img/icon.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
