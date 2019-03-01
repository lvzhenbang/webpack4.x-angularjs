import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import styleusComponent from './styleus.component';

let styleusModule = angular.module('styleus', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      name: 'stylus',
      url: '/stylus',
      component: 'stylus'
    });
}])
.component('styleus', styleusComponent)
.name;

export default styleusModule;