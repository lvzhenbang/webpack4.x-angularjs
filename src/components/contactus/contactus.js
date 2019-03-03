import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import contactusComponent from './contactus.component';

let contactusModule = angular.module('contactus', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'app',
      name: 'contactus',
      url: '/contactus',
      views: {
        app: {
          component: 'contactus'
        }
      }
    });
}])
.component('contactus', contactusComponent)
.name;

export default contactusModule;