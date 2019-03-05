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
    data: '<'
  },
  template: `
  <banner banner="$ctrl.data.banner"></banner>
  <div class="sj_wrapper">
    <tab data="$ctrl.data.tabs.ywbk"></tab>
    <div ui-view="ywbk"></div>
  </div>
  `,
  controller: YwbkController
}