import '@css/second/index.scss';

class ShzrController {
  constructor(storageService) {}

  isActive(index) {
    return index === 0 ? true : false
  }
}

ShzrController.$inject = ['storageService']

export const shzrComponent = {
  bindings: {
    data: '<'
  },
  template: `
  <banner banner="$ctrl.data.banner"></banner>
  <div class="sj_wrapper">
    <tab data="$ctrl.data.tabs.shzr"></tab>
    <div ui-view="shzr"></div>
  </div>
  `,
  controller: ShzrController
}