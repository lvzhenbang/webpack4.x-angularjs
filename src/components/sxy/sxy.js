import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import classroom from './classroom/classroom.js';
import celebrites from './celebrites/celebrites.js';
import school from './school/school.js';

import sxyComponent from './sxy.component';

let sxyModule = angular.module('sxy', [
  uiRouter,
  classroom,
  celebrites,
  school
])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  
  $uiRouterProvider
    .urlService
    .rules
    .when('/sxy', '/sxy/school')
  
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'app',
      name: 'sxy',
      url: '/sxy',
      views: {
        app: {
          component: 'sxy'
        }
      } 
    })
}])
.component('sxy', sxyComponent)
.name;

export default sxyModule;