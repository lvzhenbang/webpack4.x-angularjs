import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import careerComponent from './career.component';

let careerModule = angular.module('shzr.career', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'shzr',
      name: 'career',
      url: '/career',
      views: {
        'shzr': {
          component: 'career'
        }
      }
    });
}])
.component('career', careerComponent)
.name;

export default careerModule;