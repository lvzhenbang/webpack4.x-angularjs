import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import teamComponent from './team.component';

let teamModule = angular.module('zjsj.team', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'zjsj',
      name: 'team',
      url: '/team',
      views: {
        'zjsj': {
          component: 'team'
        }
      }
    });
}])
.component('team', teamComponent)
.name;

export default teamModule;