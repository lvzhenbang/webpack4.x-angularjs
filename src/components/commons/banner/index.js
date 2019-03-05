import template from './banner.html';
import '@css/commons/banner.scss';

class BannerController {
  constructor($scope) {}

  isActive(index) {
    return index === 0 ? true : false
  }
}

BannerController.$inject = ['$scope']

let bannerComponent = {
  bindings: { banner: '<'},
  template,
  controller: BannerController
};

export default bannerComponent;