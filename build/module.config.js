const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(isDev) {
  return {
    rules: [
      {
        include: path.resolve(__dirname, '../assets/'),
        test: /\.scss$/,
        use: [
          isDev? {
            loader: 'style-loader',
            options: { sourceMap: true }
          } : MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          },
          { 
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './build/'
              }
            }
          },
          { 
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader'
      },
      {
        include: path.resolve(__dirname, '../src/'),
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        include: path.resolve(__dirname, '../assets/fonts/'),
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name:  isDev ? '[name].[ext]' : '[name].[hash].[ext]',
            outputPath: 'assets/fonts/'
          }
        }]
      },
      {
        include: path.resolve(__dirname, '../assets/base64/'),
        test: /\.(png|jpe?g)$/,
        use: 'url-loader'
      }
    ]
  }
}
