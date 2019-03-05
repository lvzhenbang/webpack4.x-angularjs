import '@css/second/index.scss';

class YwbkController {
  constructor(storageService) {}

  isActive(index) {
    return index === 0 ? true : false
  }
}

YwbkController.$inject = ['storageService']

export const ywbkComponent = {
  bindings: {
    banner: '<',
    tabs: '<'
  },
  template: `
  <banner banner="$ctrl.banner"></banner>
  <div class="sj_wrapper">
    <tab data="$ctrl.tabs"></tab>
    <div ui-view="ywbk"></div>
  </div>
  `,
  controller: YwbkController
}