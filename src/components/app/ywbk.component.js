/**
 * component of ywbk
 * by lzb
 */
import '@css/second/index.scss';

class YwbkController {
  constructor(storageService) {}

  isActive(index) {
    return index === 0 ? true : false
  }

  touchMove(event) {
    let tabItem = event.target.parentNode,
        itemWidth = tabItem.offsetWidth,
        currentX = tabItem.offsetLeft,
        tabBox = tabItem.parentNode.parentNode,
        winWidth = tabBox.offsetWidth

      event.clientX > winWidth/2 ? tabBox.scrollTo(currentX + itemWidth/2, 0) : tabBox.scrollTo(currentX - 3*itemWidth/2, 0)
  }
}

YwbkController.$inject = ['storageService']

export const ywbkComponent = {
  bindings: { tabs: '<' },
  template: `
  <div class="sj_wrapper">
    <div class="sj_block-title">
      <div> {{ $ctrl.tabs.cn_name }} </div>
      <div> {{ $ctrl.abs.en_name }} </div>
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
              ui-sref="ywbk-block({type: item.type})"
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
  controller: YwbkController
}