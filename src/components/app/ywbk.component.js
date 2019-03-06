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
              ui-sref="ywbk-block({type: item.type})">
              <div> {{ item.cn_name }} </div>
              <div> {{ item.en_name }} </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div ui-view="ywbk"></div>
  </div>
  `,
  controller: YwbkController
}