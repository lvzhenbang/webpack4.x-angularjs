/**
 * module about sxy
 * by lzb
 */

// route
import {
  celebritesRoute,
  classroomRoute,
  schoolRoute
} from '../routes/sxy.route'

// component
import {
  celebritesComponent,
  classroomComponent,
  schoolComponent
} from '../components/sxy/index'

export const sxyModule = angular.module('sxy', [])

// 注册路由
sxyModule.config(['$stateRegistryProvider', function($stateRegistryProvider) {
  $stateRegistryProvider.register(celebritesRoute)
  $stateRegistryProvider.register(classroomRoute)
  $stateRegistryProvider.register(schoolRoute)
}])

// 注册组件
sxyModule.component('celebrites', celebritesComponent)
sxyModule.component('classroom', classroomComponent)
sxyModule.component('school', schoolComponent)