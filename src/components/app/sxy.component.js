/**
 * component of sxy
 * by lzb
 */
import '@css/second/index.scss';

class SxyController {
  constructor(storageService) {}

  isActive(index) {
    return index === 0 ? true : false
  }
}

SxyController.$inject = ['storageService']

export const sxyComponent = {
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
              ui-sref="sxy-block({type: item.type})">
              <div> {{ item.cn_name }} </div>
              <div> {{ item.en_name }} </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div ui-view="sxy"></div>
  </div>
  `,
  controller: SxyController
}