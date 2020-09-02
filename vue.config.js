module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/style/_variables.scss";',
      },
    },
  },
}
