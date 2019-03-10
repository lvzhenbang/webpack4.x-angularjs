/**
 * component of banner
 * by lzb
 */
import '~css/commons/banner.scss';

class BannerController {
  constructor($scope) {
    this.$scope = $scope;
    this.isActive = index => index === 0;
  }
}

BannerController.$inject = ['$scope'];

export default {
  bindings: { banner: '<' },
  template: `
  <div class="banner">
    <div class="carousel" carousel>
      <div class="carousel-inner">
        <div
            class="carousel-item"
            ng-repeat="(index, item) in $ctrl.banner"
            ng-class="{active: $ctrl.isActive(index)}">
          <a ui-sref="{{ item.href }}">
            <img ng-src="{{ item.img }}" alt="{{ item.title }}">
          </a>
        </div>
      </div>
      <div class="carousel-control btn-prev"></div>
      <div class="carousel-control btn-next"></div>
    </div>
  </div>
  `,
  controller: BannerController,
};
