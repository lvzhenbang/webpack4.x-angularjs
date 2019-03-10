/**
 * directive of backtop
 * by lzb
 */
import scrollto from '../utils/scrollto';

export default function backtopDirective() {
  return {
    restrict: 'A',
    link($scope, element) {
      let showing = Object.prototype.hasOwnProperty.call(element, 'showing') ? element.showing : false;

      function backScroll() {
        if (window.pageYOffset > window.outerHeight) {
          if (!showing) {
            showing = true;
            element.css('display', 'block');
          }
        } else {
          showing = false;
          element.css('display', 'none');
        }
      }

      element.on('click', () => {
        window.removeEventListener('scroll', backScroll);

        element.css('display', 'none');
        showing = false;

        scrollto(0, backScroll);
      });

      window.addEventListener('scroll', backScroll);

      $scope.$on('$destroy', () => {
        window.removeEventListener('scroll', backScroll);
      });
    },
  };
}
