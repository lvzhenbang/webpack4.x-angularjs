/**
 * webpack.config.js
 * by lzb
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopywebpackPlugin = require('copy-webpack-plugin');
const Workbox = require('workbox-webpack-plugin');

const { entry, plugins } = require('./multipage.config.js');
const Module = require('./module.config.js');
const { host } = require('../config');

module.exports = (mode) => {
  const isDev = mode !== 'production';

  const basePlugin = [
    new CopywebpackPlugin([{
      from: path.join(__dirname, '../assets', 'init'),
      to: path.join(__dirname, '..', 'dist'),
    }]),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[chunkhash].css',
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorOptions: isDev ? { safe: true } : {
        map: {
          inline: false,
        },
        safe: true,
      },
    }),
    new Workbox.GenerateSW({
      importWorkboxFrom: 'local',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ].concat(plugins);
  return {
    entry,
    mode,
    output: {
      path: path.resolve(__dirname, '../dist/'),
      filename: isDev ? 'assets/js/[name].js' : 'assets/js/[name].[chunkhash].js',
      publicPath: isDev ? host.devUrl : host.deployUrl,
    },
    devServer: {
      open: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          commons: {
            name: 'common',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
          },
          vendor: {
            name: 'vendor',
            test: /node_modules/,
            priority: 10,
            enforce: true,
          },
        },
      },
    },
    externals: {
      BMap: 'BMap',
      window: 'window',
    },
    resolve: {
      alias: {
        '~': path.join(__dirname, '..'),
        '~src': path.join(__dirname, '..', 'src'),
        '~css': path.join(__dirname, '..', 'assets', 'css'),
        '~utils': path.join(__dirname, '..', 'src', 'utils'),
      },
    },
    module: Module(isDev),
    plugins: isDev ? basePlugin : basePlugin.concat([
      new CopywebpackPlugin([{
        from: path.join(__dirname, '../assets', 'imgs'),
        to: path.join(__dirname, '../dist/assets', 'imgs'),
      },
      {
        from: path.join(__dirname, '..', 'data'),
        to: path.join(__dirname, '../dist', 'data'),
      }]),
    ]),
    devtool: isDev ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
  };
};
