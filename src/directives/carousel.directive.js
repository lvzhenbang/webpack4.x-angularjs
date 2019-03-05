import Carousel from '../utils/carousel'
export function carouselDirective() {
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
}