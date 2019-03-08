const path = require('path');

// entry
const entry = {
  app: path.resolve(__dirname, '../src/bootstrap.js'),
};

// make pages
const HtmlWebapckPlugin = require('html-webpack-plugin');

let plugins = [
  new HtmlWebapckPlugin({
    /* inital page */
    filename: 'index.html',
    chunks: ['app'],
    /* page head */
    title: 'webpack4.x-angularjs',
    // meta: nav.meta,
    favicon: path.resolve(__dirname, '../assets/init/favicon-144.png'),
    template: path.resolve(__dirname, '../index.html'),
    minify: true,
  }),
];

// sprites
const SpritesmithPlugin = require('webpack-spritesmith');
const { sprites } = require('../config/index.js');

plugins = sprites.reduce((acc, sprite) => acc.concat([new SpritesmithPlugin({
  src: {
    cwd: path.resolve(__dirname, `../assets/sprites/${sprite}/`),
    glob: '*.png',
  },
  target: {
    image: path.resolve(__dirname, `../assets/base64/${sprite}-sprite.png`),
    css: path.resolve(__dirname, `../assets/css/${sprite}/${sprite}-sprite.scss`),
  },
  apiOptions: {
    cssImageRef: `../../base64/${sprite}-sprite.png`,
  },
})]), plugins);

module.exports = {
  entry,
  plugins,
};
