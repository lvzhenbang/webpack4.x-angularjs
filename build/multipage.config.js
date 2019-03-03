const path = require('path')

// entry
let entry = {
  app: path.join(__dirname, '../src/bootstrap.js')
}

// make pages
const HtmlWebapckPlugin = require('html-webpack-plugin');
let plugins = [];


  plugins.push(
    new HtmlWebapckPlugin({
      /* inital page */
      filename: 'index.html',
      chunks: ['app'],
      /* page head */
      title: 'angularjs',
      // meta: nav.meta,
      favicon: path.resolve(__dirname, '../assets/init/favicon-144.png'),
      template: path.join(__dirname, '../index.html'),
      minify: true
    })
  )

// sprites 
const SpritesmithPlugin = require('webpack-spritesmith');
const sprites = require('../config/index.js').sprites;

for(let sprite of sprites) {
  plugins.push(new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, '../assets/sprites/' + sprite + '/'),
      glob: '*.png'
    },
    target: {
      image: path.resolve(__dirname, '../assets/base64/' + sprite + '-sprite.png'),
      css: path.resolve(__dirname, '../assets/css/' + sprite + '/' + sprite + '-sprite.scss')
    },
    apiOptions: {
      cssImageRef: '../../base64/' + sprite + '-sprite.png'
    }
  }))
}

module.exports = {
  entry,
  plugins
}