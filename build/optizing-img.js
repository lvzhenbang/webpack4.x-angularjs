const path = require('path');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
const imageminGifsicle = require('imagemin-gifsicle');

const { dir } = require('../config');

async function optizieImg(name) {
  await imagemin(
    [
      path.resolve(__dirname, `../static/imgs/${name}/*.jpg`),
      path.resolve(__dirname, `../static/imgs/${name}/*.png`),
      path.resolve(__dirname, `../static/imgs/${name}/*.gif`),
    ],
    path.resolve(__dirname, `../static/imgs/${name}/`),
    {
      use: [
        imageminMozjpeg(),
        imageminOptipng(),
        imageminGifsicle(),
      ],
    },
  );

  window.console.log(`${name} : 图片优化完成！`);
}

dir.forEach((name) => {
  optizieImg(name);
});
