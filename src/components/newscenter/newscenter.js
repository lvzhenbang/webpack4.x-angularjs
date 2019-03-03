import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import newscenterComponent from './newscenter.component';

let newscenterModule = angular.module('newscenter', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'app',
      name: 'newscenter',
      url: '/newscenter',
      views: {
        app: {
          component: 'newscenter'
        }
      }
      
    });
}])
.component('newscenter', newscenterComponent)
.name;

export default newscenterModule;