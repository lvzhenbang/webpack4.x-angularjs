import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import footerComponent from './footer.component.js';

let footerModule = angular.module('footer', [])
.component('footer', footerComponent)
.name;

export default footerModule;