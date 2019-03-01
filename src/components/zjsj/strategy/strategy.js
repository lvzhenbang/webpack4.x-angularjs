import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import strategyComponent from './strategy.component';

let strategyModule = angular.module('zjsj.strategy', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'zjsj',
      name: 'strategy',
      url: '/strategy',
      views: {
        'zjsj': {
          component: 'strategy'
        }
      }
    });
}])
.component('strategy', strategyComponent)
.name;

export default strategyModule;