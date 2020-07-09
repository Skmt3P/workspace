// const path = require('path')

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        data: `@import "@/assets/_variables.scss"; @import "@/assets/_base.css"; `,
      },
    },
  },
  configureWebpack: {
    module: {
      rules: [{
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          exclude: /node_modules/,
          options: {
            postcss: {
              plugins: [
                require('postcss-preset-env')(),
                require('postcss-import')(),
                require('postcss-utilities')(),
                require('postcss-url')(),
                require('postcss-nested')(),
                require('postcss-css-variables')(),
                require('postcss-px-to-viewport')({
                  viewportWidth: 375,
                  exclude: [/node_modules/],
                  selectorBlackList: [/dist/],
                }),
              ]
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [{
            loader: 'postcss-loader'
          }]
        }
      ],
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      },
    },
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
