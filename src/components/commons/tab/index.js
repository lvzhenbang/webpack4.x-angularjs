import '@css/commons/tabs.scss'

let tabComponent = {
  bindings: { data: '<' },
  template: `
  <div class="sj_block-title">
    <div> {{ $ctrl.data.cn_name }} </div>
    <div> {{ $ctrl.data.en_name }} </div>
  </div>

  <div class="sj_tabs">
    <div class="sj_tabs-container">
      <div class="sj_tab-box">
        <div class="line"></div>
        <div class="tabs">
          <a
            class="tab-item"
            ng-repeat="(index, item) in $ctrl.data.tabs"
            ng-class="{ active: isActive(index) }"
            ui-sref="{{ item.type }}">
            <div> {{ item.cn_name }} </div>
            <div> {{ item.en_name }} </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  `
}

export default tabComponent
