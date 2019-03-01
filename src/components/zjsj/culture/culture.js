import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import cultureComponent from './culture.component';

let cultureModule = angular.module('zjsj.culture', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'zjsj',
      name: 'culture',
      url: '/culture',
      views: {
        'zjsj': {
          component: 'culture'
        }
      }
    });
}])
.component('culture', cultureComponent)
.name;

export default cultureModule;