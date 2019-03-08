/**
 * module about block
 * by lzb
 */

// block route
import * as angular from 'angular';
import {
  shzrBlockRoute,
  sxyBlockRoute,
  ywbkBlockRoute,
  zjsjBlockRoute,
} from '../routes/block.route';

// define blockModule
const blockModule = angular.module('block', []);

// register route
blockModule.config(['$stateRegistryProvider', ($stateRegistryProvider) => {
  // block route
  $stateRegistryProvider.register(shzrBlockRoute);
  $stateRegistryProvider.register(sxyBlockRoute);
  $stateRegistryProvider.register(ywbkBlockRoute);
  $stateRegistryProvider.register(zjsjBlockRoute);
}]);

export default blockModule;
