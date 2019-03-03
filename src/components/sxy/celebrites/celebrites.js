import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import celebritesComponent from './celebrites.component';

let celebritesModule = angular.module('sxy.celebrites', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'sxy',
      name: 'celebrites',
      url: '/celebrites',
      views: {
        'sxy': {
          component: 'celebrites',
        }
      }
    });
}])
.component('celebrites', celebritesComponent)
.name;

export default celebritesModule;