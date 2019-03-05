import '@css/styleus/index.scss'

class StyleusController {
  constructor(storageService) {}

  itemStyle(width, height) {
    return {
      "width": width + 'px',
      "height": height + 'px'
    }
  }
}

StyleusController.$inject = ['storageService']

export const styleusComponent = {
  bindings: {
    styleus: '<'
  },
  controller: StyleusController,
  template: `
  <div class="sj_style-list sj_wrapper">
    <div class="sj_index-title">
      <span> {{ $ctrl.styleus.cn_name }} </span>
      <div></div>
      <span> {{ $ctrl.styleus.en_name }} </span>
    </div>

    <div class="style-list">
      <div
        class="style-item"
        ng-repeat="item in $ctrl.styleus.list"
        ng-style="{{ $ctrl.itemStyle(item.width, item.height) }}">
        <img
          ng-src="{{ item.img }}"
          width="{{ item.width }}"
          height="{{ item.height }}"
          data-width="{{ item.width }}"
          data-height="{{ item.height }}"
          title="{{ item.title }}">
        <div class="desc"> {{ item.desc }} </div>
      </div>
    </div>
  </div>
  `
}