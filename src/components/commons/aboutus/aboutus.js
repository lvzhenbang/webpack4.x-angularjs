import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import aboutusComponent from './aboutus.component';

let aboutusModule = angular.module('aboutus', [])
.component('aboutus', aboutusComponent)
.name;

export default aboutusModule;