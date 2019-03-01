import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import bannerComponent from './banner.component.js';

import Carousel from '@utils/carousel.js';

let bannerModule = angular.module('banner', [])
.directive('carousel', function() {
  return {
    restrict: 'A',
    link: function($scope, element) {
      
      setTimeout(function() {
        new Carousel('.carousel', {
          timer: 5000,
          hasIndicators: true,
          autoplay: false
        })
      }, 0)
      
      $scope.$on("$destroy", function() {
        
      })
    }
  }
})
.component('banner', bannerComponent)
.name;

export default bannerModule;