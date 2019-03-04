/**
 * module about ywbk
 * by lzb
 */

import {
  allfinanceRoute,
  cultureRoute,
  estateRoute,
  financeRoute,
  healthRoute,
  restaurantRoute
} from '../routes/ywbk.route.js'

import {
  allfinanceComponent,
  cultureComponent,
  estateComponent,
  financeComponent,
  healthComponent,
  restaurantComponent
} from '../components/ywbk'

export const ywbkModule = angular.module('ywbk', [])

// 注册路由
ywbkModule.config(['$stateRegistryProvider', function($stateRegistryProvider) {
  $stateRegistryProvider.register(allfinanceRoute)
  $stateRegistryProvider.register(cultureRoute)
  $stateRegistryProvider.register(estateRoute)
  $stateRegistryProvider.register(financeRoute)
  $stateRegistryProvider.register(healthRoute)
  $stateRegistryProvider.register(restaurantRoute)
}])

// 注册组件
ywbkModule.component('allfinance', allfinanceComponent)
ywbkModule.component('culture2', cultureComponent)
ywbkModule.component('estate', estateComponent)
ywbkModule.component('finance', financeComponent)
ywbkModule.component('health', healthComponent)
ywbkModule.component('restaurant', restaurantComponent)