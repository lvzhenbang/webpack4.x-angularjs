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
    <tab data="$ctrl.tabs"></tab>
    <div ui-view="ywbk"></div>
  </div>
  `,
  controller: YwbkController
}