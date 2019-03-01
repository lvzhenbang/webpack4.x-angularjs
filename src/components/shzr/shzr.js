import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import career from './career/career.js';
import system from './system/system.js';
import welfare from './welfare/welfare.js';

import shzrComponent from './shzr.component';

let shzrModule = angular.module('shzr', [
  uiRouter,
  career,
  system,
  welfare
])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .urlService
    .rules
    .when('/shzr', '/shzr/system')

  $uiRouterProvider
    .stateRegistry
    .register({
      name: 'shzr',
      url: '/shzr',
      component: 'shzr'
    })
}])
.component('shzr', shzrComponent)
.name;

export default shzrModule;