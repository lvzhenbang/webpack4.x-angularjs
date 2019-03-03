const path = require('path');
const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminOptipng = require('imagemin-optipng');
const imageminGifsicle = require('imagemin-gifsicle');

let dir = require('../config').dir;

for (let name of dir) {
  optizieImg(name)
}

async function optizieImg(name) {
	await imagemin(
    [
      path.resolve(__dirname, '../static/imgs/'+ name +'/*.jpg'),
      path.resolve(__dirname, '../static/imgs/'+ name +'/*.png'),
      path.resolve(__dirname, '../static/imgs/'+ name +'/*.gif')
    ],
    path.resolve(__dirname, '../static/imgs/'+ name +'/'),
    {
      use: [
        imageminMozjpeg(),
        imageminOptipng(),
        imageminGifsicle()
      ]
    }
  );

	console.log(name + ': ' + '图片优化完成！');
}