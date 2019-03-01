import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import speechComponent from './speech.component';

let speechModule = angular.module('zjsj.speech', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'zjsj',
      name: 'speech',
      url: '/speech',
      views: {
        'zjsj': {
          component: 'speech'
        }
      }
    });
}])
.component('speech', speechComponent)
.name;

export default speechModule;