import * as angular from 'angular';
import scrollto from '~utils/scrollto';

class Footer {
  constructor($scope) {
    this.$scope = $scope;
    this.showing = {};
  }

  dropdown(e) {
    let element = e.target;
    const tagName = element.tagName.toLowerCase();

    element = angular.element(element);
    if (tagName === 'a' || tagName === 'span') {
      const parent = element.parent();
      const ul = parent.find('ul');
      const text = element[0].innerText;
      if (ul) {
        this.showing[text] = !this.showing[text];
        if (this.showing[text]) {
          ul.css('display', 'block');
        } else {
          ul.css('display', 'none');
        }
      }
    }

    const type = element.attr('type');

    this.scrollToTarget(type);
  }

  scrollspy(e) {
    const element = angular.element(e.target);
    const type = element.attr('type');
    this.scrollToTarget(type);
  }

  scrollToTarget(type) {
    if (type) {
      const target = document.querySelector('.sj_nav');
      this.$scope.$watch('$viewContentLoaded', () => {
        scrollto(target.clientHeight);
      });
    }
  }
}

Footer.$inject = ['$scope'];

export default Footer;
