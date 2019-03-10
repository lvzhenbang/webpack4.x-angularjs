/**
 * module about admin
 * by lzb
 */
import * as angular from 'angular';

// admin route
import loginRoute from '../routes/admin.route';


// admin component
import {
  loginComponent,
} from '../components/admin';

const adminModule = angular.module('admin', []);

adminModule.config(['$uiRouterProvider', ($uiRouterProvider) => {
  const { stateRegistry, urlService } = $uiRouterProvider;
  urlService.rules.otherwise({ state: 'login' });
  stateRegistry.register(loginRoute);
}]);

adminModule.component('login', loginComponent);

export default adminModule;
