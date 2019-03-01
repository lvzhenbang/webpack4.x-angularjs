import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import allfinanceComponent from './allfinance.component';

let allfinanceModule = angular.module('ywbk.allfinance', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'ywbk',
      name: 'allfinance',
      url: '/allfinance',
      views: {
        'ywbk': {
          component: 'allfinance'
        }
      }
    });
}])
.component('allfinance', allfinanceComponent)
.name;

export default allfinanceModule;