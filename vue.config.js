module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/_variables.scss";',
      },
    },
  },
}
