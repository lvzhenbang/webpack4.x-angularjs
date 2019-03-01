import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import cultureComponent from './culture.component';

let cultureModule = angular.module('ywbk.culture', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'ywbk',
      name: 'culture2',
      url: '/culture2',
      views: {
        'ywbk': {
          component: 'culture2'
        }
      }
    });
}])
.component('culture2', cultureComponent)
.name;

export default cultureModule;