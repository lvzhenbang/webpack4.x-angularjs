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
    <tab data="$ctrl.tabs"></tab>
    <div ui-view="sxy"></div>
  </div>
  `,
  controller: SxyController
}