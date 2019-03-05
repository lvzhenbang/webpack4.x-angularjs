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
    data: '<'
  },
  template: `
  <banner banner="$ctrl.data.banner"></banner>
  <div class="sj_wrapper">
    <tab data="$ctrl.data.tabs.sxy"></tab>
    <div ui-view="sxy"></div>
  </div>
  `,
  controller: SxyController
}