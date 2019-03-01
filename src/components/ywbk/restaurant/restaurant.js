import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import restaurantComponent from './restaurant.component';

let restaurantModule = angular.module('ywbk.restaurant', [])
.config(['$uiRouterProvider', ($uiRouterProvider) => {
  $uiRouterProvider
    .stateRegistry
    .register({
      parent: 'ywbk',
      name: 'restaurant',
      url: '/restaurant',
      views: {
        'ywbk': {
          component: 'restaurant'
        }
      }
    });
}])
.component('restaurant', restaurantComponent)
.name;

export default restaurantModule;