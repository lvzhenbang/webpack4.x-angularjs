/**
 * module about shzr
 * by lzb
 */

import {
  careerRoute,
  systemRoute,
  welfareRoute
} from '../routes/shzr.route'

import {
  careerComponent,
  systemComponent,
  welfareComponent
} from '../components/shzr/index'

export const shzrModule = angular.module('shzr', [])

// 注册路由
shzrModule.config(['$stateRegistryProvider', function($stateRegistryProvider) {
  $stateRegistryProvider.register(careerRoute)
  $stateRegistryProvider.register(systemRoute)
  $stateRegistryProvider.register(welfareRoute)
}])

// 注册组件
shzrModule.component('career', careerComponent)
shzrModule.component('system', systemComponent)
shzrModule.component('welfare', welfareComponent)