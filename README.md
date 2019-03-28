# webpack4.x-angularjs ( single-page-application )

使用webpack4.x快速构建生成一个单页面的静态站点。

可以快速，方便的构建一个对页面的企业站或个人博客。

注：多页面应用，可参考[` webpack4.x-multi-page `](https://github.com/lvzhenbang/webpack4.x-multi-page)。

注2：为 `新闻中心` & `联系我们` & `人才招聘` 3个模块添加验证功能。

相关项目：

* [webpack4.x-angular](https://github.com/lvzhenbang/webpack4.x-angular) for `angular`。[demo](https://lvzhenbang.github.io/webpack-angular/dist/)
* [webpack4.x-angularjs](https://github.com/lvzhenbang/webpack4.x-angularjs) for `angular.js`. [demo](https://lvzhenbang.github.io/webpack4.x-angularjs/dist/#/index)。

## 安装项目所需依赖

```
yarn
```

## 优化项目所需的图片资源

```
npm run img
```

注：在执行`npm run dev`或`npm run build`命令前，需要先运行`npm run img`，这个命令会将项目所需要的图片进行优化，然后输出到正确的目录下，否则，项目启动时会找不到这些图片。

## 运行项目

```
npm run dev
```

## 发布项目

```
npm run build
```
