/**
 * component of sxy
 * by lzb
 */
import '~css/second/index.scss';

class SxyController {
  constructor(storageService) {
    this.storageService = storageService;
    this.isActive = index => index === 0;
    this.touchMove = (event) => {
      const tabItem = event.target.parentNode;
      const itemWidth = tabItem.offsetWidth;
      const currentX = tabItem.offsetLeft;
      const tabBox = tabItem.parentNode.parentNode;
      const winWidth = tabBox.offsetWidth;
      if (event.clientX > winWidth / 2) {
        tabBox.scrollTo(currentX + itemWidth / 2, 0);
      } else {
        tabBox.scrollTo(currentX - 3 * itemWidth / 2, 0);
      }
    };
  }
}

SxyController.$inject = ['storageService'];

export default {
  bindings: { tabs: '<' },
  template: `
  <div class="sj_wrapper">
    <div class="sj_block-title">
      <div> {{ $ctrl.tabs.cn_name }} </div>
      <div> {{ $ctrl.tabs.en_name }} </div>
    </div>

    <div class="sj_tabs">
      <div class="sj_tabs-container">
        <div class="sj_tab-box">
          <div class="line"></div>
          <div class="tabs">
            <a
              class="tab-item"
              ng-repeat="(index, item) in $ctrl.tabs.subtabs"
              ng-class="{ active: isActive(index) }"
              ui-sref="sxy-block({type: item.type})"
              ui-sref-active="active"
              ng-click="$ctrl.touchMove($event)">
              <div> {{ item.cn_name }} </div>
              <div> {{ item.en_name }} </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div ui-view="block"></div>
  </div>
  `,
  controller: SxyController,
};
