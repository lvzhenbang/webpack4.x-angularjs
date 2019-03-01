import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import eventComponent from './event.component';

let eventModule = angular.module('zjsj.event', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'zjsj',
      name: 'event',
      url: '/event',
      views: {
        'zjsj': {
          component: 'event'
        }
      }
    });
}])
.component('event', eventComponent)
.name;

export default eventModule;