import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import classroomComponent from './classroom.component';

let classroomModule = angular.module('sxy.classroom', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      name: 'sxy.classroom',
      url: '/classroom',
      views: {
        'sxy': {
          component: 'classroom',
        }
      }
    });
}])
.component('classroom', classroomComponent)
.name;

export default classroomModule;