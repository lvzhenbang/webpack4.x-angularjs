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
    data: '<'
  },
  template: `
  <banner banner="$ctrl.data.banner"></banner>
  <div class="sj_wrapper">
    <tab data="$ctrl.data.tabs.zjsj"></tab>
    <div ui-view="zjsj"></div>
  </div>
  `,
  controller: ZjsjController
}