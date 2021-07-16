module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'backgroundPattern': "url('../img/Shapes.svg')",
        'userIcon': "url('../img/icon.png')",
        'starlightBrigade': "url('../img/starlightbrigade.png')",
        'tedleo': "url('../img/tedleo.png')",
        'hayley': "url('../img/hayley.png')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
