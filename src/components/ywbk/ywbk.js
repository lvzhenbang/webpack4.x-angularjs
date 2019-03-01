import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import allfinance from './allfinance/allfinance.js';
import culture from './culture/culture.js';
import finance from './finance/finance.js';
import estate from './estate/estate.js';
import health from './health/health.js';
import restaurant from './restaurant/restaurant.js';

import ywbkComponent from './ywbk.component';

let ywbkModule = angular.module('ywbk', [
  uiRouter,
  allfinance,
  culture,
  finance,
  estate,
  health,
  restaurant
])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  
  $uiRouterProvider
  .urlService
  .rules
  .when('/ywbk', '/ywbk/finance')

  $uiRouterProvider
    .stateRegistry
    .register({
      name: 'ywbk',
      url: '/ywbk',
      component: 'ywbk'
    });
}])
.component('ywbk', ywbkComponent)
.name;

export default ywbkModule;