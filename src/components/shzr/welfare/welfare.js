import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import welfareComponent from './welfare.component';

let welfareModule = angular.module('shzr.welfare', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'shzr',
      name: 'welfare',
      url: '/welfare',
      views: {
        'shzr': {
          component: 'welfare'
        }
      }
    });
}])
.component('welfare', welfareComponent)
.name;

export default welfareModule;