import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import investmentComponent from './investment.component';

let investmentModule = angular.module('zjsj.investment', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'zjsj',
      name: 'investment',
      url: '/investment',
      views: {
        'zjsj': {
          component: 'investment'
        }
      }
    });
}])
.component('investment', investmentComponent)
.name;

export default investmentModule;