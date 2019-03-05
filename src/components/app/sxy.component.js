import '@css/second/index.scss';

class SxyController {
  constructor(storageService) {}

  isActive(index) {
    return index === 0 ? true : false
  }
}

SxyController.$inject = ['storageService']

export const sxyComponent = {
  bindings: {
    banner: '<',
    tabs: '<'
  },
  template: `
  <banner banner="$ctrl.banner"></banner>
  <div class="sj_wrapper">
    <tab data="$ctrl.tabs"></tab>
    <div ui-view="sxy"></div>
  </div>
  `,
  controller: SxyController
}