import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import partners from '../commons/partners/partners.js';
import products from '../commons/products/products.js';

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
      parent: 'app',
      name: 'index',
      url: '/index',
      views: {
        app: {
          component: 'index'
        }
      }
    });
}])
.component('index', indexComponent)
.name;

export default indexModule;