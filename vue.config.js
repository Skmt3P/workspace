// const path = require('path')

module.exports = {
  // productionSourceMap: false,
  // filenameHashing: true,
  // publicPath: '/',
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       data: `@import "@/assets/_variables.scss"; @import "@/assets/_base.css"; `,
  //     },
  //   },
  // },
  configureWebpack: {
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   loader: 'babel-loader',
        //   exclude: /node_modules/,
        // },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            postcss: {
              plugins: {
                'postcss-preset-env': {},
                'postcss-utilities': {},
                'postcss-url': {},
                'postcss-nested': {},
                'postcss-css-variables': {},
                'postcss-px-to-viewport': {
                  viewportWidth: 375,
                  exclude: [/node_modules/],
                  selectorBlackList: [/dist/],
                },
              },
            },
          },
        },
      ],
    },
    // resolve: {
    //   alias: {
    //     vue$: 'vue/dist/vue.esm.js',
    //     '@': path.resolve(__dirname, 'src/'),
    //   },
    // },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'WorkSpace|R.D.Sakamoto'
      args[0].meta = {
        viewport: 'width=device-width,initial-scale=1,user-scalable=no',
      }
      return args
    })
  },
}
