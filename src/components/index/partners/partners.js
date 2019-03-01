import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import partnersComponent from './partners.component';

let partnersModule = angular.module('index.partners', [])
.component('partners', partnersComponent)
.name;

export default partnersModule;