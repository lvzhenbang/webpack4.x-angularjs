/**
 * directive of carousel
 * by lzb
 */
import Carousel from '../utils/carousel';

export default function carouselDirective() {
  return {
    restrict: 'A',
    link($scope) {
      let slide = null;
      setTimeout(() => {
        slide = new Carousel('.carousel', {
          timer: 5000,
          hasIndicators: true,
          autoplay: true,
        });
        slide.init();
      }, 0);

      $scope.$on('$destroy', () => {
        slide.destory();
      });
    },
  };
}
