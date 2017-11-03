const path = require('path')

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [
        path.resolve(__dirname, 'assets/css')
      ]
    }),
    require('postcss-mixins'),
    require('postcss-cssnext')({
      autoprefixer: false,
      warnForDuplicates: false
    }),
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'ie > 10'
      ]
    })
  ]
}
