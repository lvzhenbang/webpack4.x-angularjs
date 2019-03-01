import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import financeComponent from './finance.component';

let financeModule = angular.module('ywbk.finance', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'ywbk',
      name: 'finance',
      url: '/finance',
      views: {
        'ywbk': {
          component: 'finance'
        }
      }
    });
}])
.component('finance', financeComponent)
.name;

export default financeModule;