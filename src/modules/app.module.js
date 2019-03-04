/**
 * module about app
 * by lzb
 */

// app child route
import {
  appRoute,
  contactusRoute,
  indexRoute,
  newscenterRoute,
  recruitmentRoute,
  shzrRoute,
  styleusRoute,
  sxyRoute,
  ywbkRoute,
  zjsjRoute
} from '../routes/app.route'

// app child component
import appComponent from '../components/app/app.component'
import contactusComponent from '../components/contactus/contactus.component'
import indexComponent from '../components/index/index.component'
import newscenterComponent from '../components/newscenter/newscenter.component'
import recruitmentComponent from '../components/recruitment/recruitment.component'
import shzrComponent from '../components/shzr/shzr.component'
import styleusComponent from '../components/styleus/styleus.component'
import sxyComponent from '../components/sxy/sxy.component'
import ywbkComponent from '../components/ywbk/ywbk.component'
import zjsjComponent from '../components/zjsj/zjsj.component'

// define appModule
export const appModule = angular.module('app', [])

// register route
appModule.config(['$uiRouterProvider', '$locationProvider', function($uiRouterProvider, $locationProvider) {
  const stateRegistry = $uiRouterProvider.stateRegistry
  
  $locationProvider.hashPrefix('')
  $uiRouterProvider.trace.enable(1)
  // appModule route
  stateRegistry.register(appRoute)
  stateRegistry.register(contactusRoute)
  stateRegistry.register(indexRoute)
  stateRegistry.register(newscenterRoute)
  stateRegistry.register(recruitmentRoute)
  stateRegistry.register(shzrRoute)
  stateRegistry.register(styleusRoute)
  stateRegistry.register(sxyRoute)
  stateRegistry.register(ywbkRoute)
  stateRegistry.register(zjsjRoute)

  $uiRouterProvider.urlService.rules.when('', '/index')
}])

// register component
appModule.component('app', appComponent)
appModule.component('contactus', contactusComponent)
appModule.component('index', indexComponent)
appModule.component('newscenter', newscenterComponent)
appModule.component('recruitment', recruitmentComponent)
appModule.component('shzr', shzrComponent)
appModule.component('styleus', styleusComponent)
appModule.component('sxy',sxyComponent)
appModule.component('ywbk', ywbkComponent)
appModule.component('zjsj', zjsjComponent)