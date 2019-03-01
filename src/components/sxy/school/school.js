import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import schoolComponent from './school.component';

let schoolModule = angular.module('sxy.school', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'sxy',
      name: 'school',
      url: '/school',
      views: {
        'sxy': {
          component: 'school',
        }
      }
    });
}])
.component('school', schoolComponent)
.name;

export default schoolModule;