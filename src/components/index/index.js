import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import partners from './partners/partners.js';
import products from './products/products.js';

import indexComponent from './index.component';

let indexModule = angular.module('index', [
  uiRouter,
  partners,
  products
])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      name: 'index',
      url: '/index',
      component: 'index'
    });
}])
.component('index', indexComponent)
.name;

export default indexModule;