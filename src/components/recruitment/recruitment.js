import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import recruitmentComponent from './recruitment.component';

let recruitmentModule = angular.module('recruitment', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'app',
      name: 'recruitment',
      url: '/recruitment',
      views: {
        app: {
          component: 'recruitment'
        }
      }
      
    });
}])
.component('recruitment', recruitmentComponent)
.name;

export default recruitmentModule;