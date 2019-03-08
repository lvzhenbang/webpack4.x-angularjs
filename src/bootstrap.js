/**
 * boot module
 * by lzb
 */
import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import oclazyload from 'oclazyload';
import { Visualizer } from '@uirouter/visualizer';

import appModule from './modules/app.module';

// commons component
import {
  aboutusComponent,
  backtopComponent,
  blockComponent,
  blocktitleComponent,
  bannerComponent,
  footerComponent,
  headerComponent,
  mapComponent,
  partnersComponent,
  productsComponent,
} from './components/commons';

// dirctive
import backtopDirective from './directives/backtop.directive';
import mapDirective from './directives/map.directive';
import carouselDirective from './directives/carousel.directive';
import navfixedDirective from './directives/navfixed.directive';

// service
import { loadingService, loadingRunBlock } from './services/loading.service';
import { serviceWorker, serviceWokerRunBlock } from './services/servicework.service';
import dataService from './services/data.service';
import storageService from './services/storage.service';

// define initModule
const initModule = angular.module('init', [
  uiRouter,
  oclazyload,
  appModule.name,
]);

// register component
initModule.component('aboutus', aboutusComponent);
initModule.component('backtop', backtopComponent);
initModule.component('block', blockComponent);
initModule.component('blocktitle', blocktitleComponent);
initModule.component('banner', bannerComponent);
initModule.component('footer', footerComponent);
initModule.component('header', headerComponent);
initModule.component('map', mapComponent);
initModule.component('partners', partnersComponent);
initModule.component('products', productsComponent);

// register directive
initModule.directive('backtop', backtopDirective);
initModule.directive('map', mapDirective);
initModule.directive('carousel', carouselDirective);
initModule.directive('navfixed', navfixedDirective);

// register service
initModule.service('loadingService', loadingService);
initModule.service('serviceWorker', serviceWorker);
initModule.service('dataService', dataService);
initModule.service('storageService', storageService);

initModule.run(loadingRunBlock);
initModule.run(serviceWokerRunBlock);

// add visualizer
initModule.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider.plugin(Visualizer);
}]);

export default initModule;
