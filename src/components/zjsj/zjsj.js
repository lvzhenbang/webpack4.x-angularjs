import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import zjsjComponent from './zjsj.component';

import culture from './culture/culture.js';
import event from './event/event.js';
import investment from './investment/investment.js';
import speech from './speech/speech.js';
import strategy from './strategy/strategy.js';
import team from './team/team.js';

let zjsjModule = angular.module('zjsj', [
  uiRouter,
  culture,
  event,
  investment,
  speech,
  strategy,
  team
])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .urlService
    .rules
    .when('/zjsj', '/zjsj/investment')

  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'app',
      name: 'zjsj',
      url: '/zjsj',
      views: {
        app: {
          component: 'zjsj'
        }
      }
    })
}])
.component('zjsj', zjsjComponent)
.name;

export default zjsjModule;