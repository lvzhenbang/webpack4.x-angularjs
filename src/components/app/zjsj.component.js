/**
 * component of zjsj
 * by lzb
 */
import '@css/second/index.scss';

class ZjsjController {
  constructor(storageService, $document) {
    this.$document = $document
  }

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

ZjsjController.$inject = ['storageService', '$document']

export const zjsjComponent = {
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
          <div class="tabs">
            <a
              class="tab-item"
              ng-repeat="(index, item) in $ctrl.tabs.subtabs"
              ng-class="{ active: isActive(index) }"
              ui-sref="zjsj-block({type: item.type})"
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
  controller: ZjsjController
}