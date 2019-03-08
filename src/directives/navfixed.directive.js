/**
 * route of navfixed
 * by lzb
 */
export default function navfixedDirective() {
  return {
    restrict: 'A',
    link($scope, element) {
      function navShow() {
        if (!element.hasClass('sj_nav-show') && window.pageYOffset >= 85) {
          element.addClass('sj_nav-show');
        }
        if (element.hasClass('sj_nav-show') && window.pageYOffset < 85) {
          element.removeClass('sj_nav-show');
        }
      }
      window.addEventListener('scroll', navShow);

      $scope.$on('$destroy', () => {
        window.removeEventListener('scroll', navShow);
      });
    },
  };
}
