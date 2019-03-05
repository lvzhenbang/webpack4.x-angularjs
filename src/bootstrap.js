import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import oclazyload from 'oclazyload';
import { Visualizer } from '@uirouter/visualizer';


// sub Module
import { appModule } from './modules/app.module'
import { shzrModule } from './modules/shzr.module'
import { sxyModule } from './modules/sxy.module'
import { ywbkModule } from './modules/ywbk.module'
import { zjsjModule } from './modules/zjsj.module'

// commons component
import {
  aboutusComponent,
  backtopComponent,
  blocktitleComponent,
  bannerComponent,
  footerComponent,
  headerComponent,
  mapComponent,
  partnersComponent,
  productsComponent,
  tabComponent
} from './components/commons'

// dirctive
import { backtopDirective } from './directives/backtop.directive'
import { mapDirective } from './directives/map.directive'
import { carouselDirective } from './directives/carousel.directive'
import { navfixedDirective } from './directives/navfixed.directive'

// service
import { loadingService, loadingRunBlock } from './services/loading.service'
import { serviceWorker, serviceWokerRunBlock } from './services/servicework.service'
import { dataService } from './services/data.service'
import { storageService } from './services/storage.service'

// define initModule
let initModule = angular.module('init', [
  uiRouter,
  oclazyload,
  appModule.name,
  shzrModule.name,
  sxyModule.name,
  ywbkModule.name,
  zjsjModule.name
])

// register component
initModule.component('aboutus', aboutusComponent)
initModule.component('backtop', backtopComponent)
initModule.component('blocktitle', blocktitleComponent)
initModule.component('banner', bannerComponent)
initModule.component('footer', footerComponent)
initModule.component('header', headerComponent)
initModule.component('map', mapComponent)
initModule.component('partners', partnersComponent)
initModule.component('products', productsComponent)
initModule.component('tab', tabComponent)

// register directive
initModule.directive('backtop', backtopDirective)
initModule.directive('map', mapDirective)
initModule.directive('carousel', carouselDirective)
initModule.directive('navfixed', navfixedDirective)

// register service
initModule.service('loadingService', loadingService)
initModule.service('serviceWorker', serviceWorker)
initModule.service('dataService', dataService)
initModule.service('storageService', storageService)

initModule.run(loadingRunBlock)
initModule.run(serviceWokerRunBlock)

// add visualizer
initModule.config(['$uiRouterProvider', function($uiRouter) {
  import('@uirouter/visualizer').then(module => $uiRouter.plugin(module.Visualizer))
}])