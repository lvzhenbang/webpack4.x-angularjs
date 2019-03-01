import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import healthComponent from './health.component';

let healthModule = angular.module('ywbk.health', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'ywbk',
      name: 'health',
      url: '/health',
      views: {
        'ywbk': {
          component: 'health'
        }
      }
    });
}])
.component('health', healthComponent)
.name;

export default healthModule;