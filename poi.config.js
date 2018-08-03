module.exports = (options, req) => ({
  extractCSS: false,
  html: false,
  sourceMap: true,
  minimize: false,
  format: 'cjs',
  filename: {
    js: 'v-file-upload.js'
  },
  hash: false,
  removeDist: true
})
