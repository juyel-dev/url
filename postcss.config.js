export default {
  plugins: {
    'tailwindcss': {},
    'autoprefixer': {
      overrideBrowserslist: [
        'last 4 Chrome versions',
        'last 4 Firefox versions',
        'last 4 Safari versions',
        'last 4 Edge versions',
        'last 2 iOS versions',
        'last 2 Android versions',
      ],
      cascade: true,
      add: true,
      remove: true,
      supports: true,
      flexbox: true,
      grid: 'autoplace',
    },
  },
}
