import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import header from './header/header.js';
import footer from './footer/footer.js';
import baiduMap from './map/baidu.map.js';
import backTop from './backtop/backtop.js';

import appComponent from './app.component.js';

let appModule = angular.module('app', [
  uiRouter,
  header,
  footer,
  baiduMap,
  backTop
])
.config(['$locationProvider', '$uiRouterProvider', ($locationProvider, $uiRouterProvider) => {
  $locationProvider.hashPrefix('');

  $uiRouterProvider
    .stateRegistry
    .register({
      name: 'app',
      redirectTo: 'index',
      component: 'app'
    });

  $uiRouterProvider
    .urlService
    .rules
    .when('', '/index')

}])
.component('app', appComponent)
.name;

export default appModule;