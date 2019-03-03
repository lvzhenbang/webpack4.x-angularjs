import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import productsComponent from './products.component';

let productsModule = angular.module('index.products', [])
.component('products', productsComponent)
.name;

export default productsModule;