import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import estateComponent from './estate.component';

let estateModule = angular.module('ywbk.estate', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'ywbk',
      name: 'estate',
      url: '/estate',
      views: {
        'ywbk': {
          component: 'estate'
        }
      }
    });
}])
.component('estate', estateComponent)
.name;

export default estateModule;