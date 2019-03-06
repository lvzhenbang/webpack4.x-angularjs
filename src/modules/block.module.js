/**
 * module about block
 * by lzb
 */

// block route
import {
  shzrBlockRoute,
  sxyBlockRoute,
  ywbkBlockRoute,
  zjsjBlockRoute
} from '../routes/block.route'

import * as angular from 'angular'
// define blockModule
export const blockModule = angular.module('block', [])

// register route
blockModule.config(['$stateRegistryProvider', function($stateRegistryProvider) {
  
  // block route
  $stateRegistryProvider.register(shzrBlockRoute)
  $stateRegistryProvider.register(sxyBlockRoute)
  $stateRegistryProvider.register(ywbkBlockRoute)
  $stateRegistryProvider.register(zjsjBlockRoute)
}])