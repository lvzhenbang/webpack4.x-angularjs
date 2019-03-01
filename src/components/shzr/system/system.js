import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import systemComponent from './system.component';

let systemModule = angular.module('shzr.system', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'shzr',
      name: 'system',
      url: '/system',
      views: {
        'shzr': {
          component: 'system'
        }
      }
    });
}])
.component('system', systemComponent)
.name;

export default systemModule;