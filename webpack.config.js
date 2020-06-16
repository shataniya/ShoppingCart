const path = require('path')
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html'),
            filename: 'index.html'
        }),
        new WebpackManifestPlugin()
    ],
    devServer: {
        contentBase: './dist',
        open: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
          },
          {
            test: /\.css$/,
            exclude:[/node_modules/],
            use: [
              'style-loader',
              // 'css-loader'
              {
                loader: 'css-loader',
                options: {
                    modules: true,
                    // localIdentName: '[local]_[hash:base64:8]'
                    // localIdentName: '[name]__[local]--[hash:base64:5]'
                    // minimize: true
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  // ident: 'postcss',
                  plugins: (loader) => [
                    // require('postcss-import')({ root: loader.resourcePath }),
                    require('postcss-cssnext')(),
                    // require('autoprefixer')(),
                    // require('cssnano')()
                  ]
                }
              }
            ]
          },
          {
            test: /\.css$/,
            exclude:[/src/],
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
              'file-loader'
            ]
          },
          {
            test: /\.(csv|tsv)$/,
            use: [
              'csv-loader'
            ]
          },
          {
            test: /\.xml$/,
            use: [
              'xml-loader'
            ]
          }
        ]
      }
}