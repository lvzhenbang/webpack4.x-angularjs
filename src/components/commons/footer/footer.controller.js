import scrollto from '@utils/scrollto.js';

class Footer {
  constructor($scope) {
    this.$scope = $scope;
    this.showing = {}
  }

  dropdown (e) {
    let element = e.target,
        tagName = element.tagName.toLowerCase()

    element = angular.element(element)
    if(tagName === 'a' || tagName === 'span' ) {
      let parent = element.parent(),
          ul = parent.find('ul'),
          text = element[0].innerText
      if (ul) {
        this.showing[text] = !this.showing[text]
        if(this.showing[text]) {
          ul.css('display', 'block')
        } else {
          ul.css('display', 'none')
        }
      }
    }

    let type = element.attr('type')

    this._scrollToTarget(type)
  }

  scrollspy(e) {
    let element = angular.element(e.target),
        type = element.attr('type')
    this._scrollToTarget(type)
  }

  _scrollToTarget(type) {
    if (type) {
      let target = document.querySelector('.sj_nav')
      this.$scope.$watch('$viewContentLoaded', function(event) {
        scrollto(target.clientHeight)
      })
    }
  }
}

Footer.$inject = ['$scope']

export default Footer;