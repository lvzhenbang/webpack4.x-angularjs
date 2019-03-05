/**
 * module about zjsj
 * by lzb
 */

import {
  cultureRoute,
  eventRoute,
  investmentRoute,
  speechRoute,
  strategyRoute,
  teamRoute
} from '../routes/zjsj.route'

import {
  cultureComponent,
  eventComponent,
  investmentComponent,
  speechComponent,
  strategyComponent,
  teamComponent
} from '../components/zjsj'

export const zjsjModule = angular.module('zjsj', [])

// 注册路由
zjsjModule.config(['$stateRegistryProvider', function($stateRegistryProvider) {
  $stateRegistryProvider.register(cultureRoute)
  $stateRegistryProvider.register(eventRoute)
  $stateRegistryProvider.register(investmentRoute)
  $stateRegistryProvider.register(speechRoute)
  $stateRegistryProvider.register(strategyRoute)
  $stateRegistryProvider.register(teamRoute)
}])

// 注册组件
zjsjModule.component('culture', cultureComponent)
zjsjModule.component('event', eventComponent)
zjsjModule.component('investment', investmentComponent)
zjsjModule.component('speech', speechComponent)
zjsjModule.component('strategy', strategyComponent)
zjsjModule.component('team', teamComponent)