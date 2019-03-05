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
    banner: '<',
    tabs: '<'
  },
  template: `
  <banner banner="$ctrl.banner"></banner>
  <div class="sj_wrapper">
    <tab data="$ctrl.tabs"></tab>
    <div ui-view="shzr"></div>
  </div>
  `,
  controller: ShzrController
}