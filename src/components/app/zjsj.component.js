import '@css/second/index.scss';

class ZjsjController {
  constructor(storageService) {}

  isActive(index) {
    return index === 0 ? true : false
  }
}

ZjsjController.$inject = ['storageService']

export const zjsjComponent = {
  bindings: {
    banner: '<',
    tabs: '<'
  },
  template: `
  <banner banner="$ctrl.banner"></banner>
  <div class="sj_wrapper">
    <tab data="$ctrl.tabs"></tab>
    <div ui-view="zjsj"></div>
  </div>
  `,
  controller: ZjsjController
}