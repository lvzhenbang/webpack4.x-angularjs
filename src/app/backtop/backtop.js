import * as angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import backtopComponent from './backtop.component';
import scrollto from '@utils/scrollto.js';

let backtopModule = angular.module('backtop', [])
.directive('backTop', function() {
  return {
    restrict: 'A',
    link: function($scope, element) {
      function backScroll() {
        if (window.pageYOffset > window.outerHeight) {
          if(!element.showing) {
            element.showing = true
            element.css('display', 'block')
          }
        } else {
          element.showing = false
          element.css('display', 'none')
        }
      }

      element.showing = false

      element.on('click', function() {

        window.removeEventListener("scroll", backScroll)

        element.css('display', 'none')
        element.showing = false

        scrollto(0, backScroll)
      })

      window.addEventListener("scroll", backScroll)

      $scope.$on("$destroy", function() {
        window.removeEventListener("scroll", backScroll)
      })
    }
  }
})
.component('backTop', backtopComponent)
.name;

export default backtopModule;