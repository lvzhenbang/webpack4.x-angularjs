import '@css/newscenter/index.scss';
class NewscenterController {
  constructor($timeout) {
    this.$timeout = $timeout
  }

  isActive(flag) {
    return flag === '1' ? true : false
  }

  isReverse(index) {
    return index % 2 === 0 ? false : true
  }

  isHide(type) {
    return type === '1' ? false : true
  }

  showItem(ele, type) {
    document.querySelectorAll('.sj_tab-item').forEach(function(item) {
      item.classList.remove('active')
    })
    ele.classList.add('active')
    let timeout = this.$timeout
    document.querySelectorAll('.sj_new-item').forEach(function(item) {
      if(item.getAttribute('data-type') === type) {
        item.style.display = ""
        timeout(() => {
          item.classList.remove('hide')
        })
      } else {
        item.classList.add('hide')
        timeout(() => {
          item.style.display = "none"
        }, 200)
      }
    })
  }
}

NewscenterController.$inject = ['$timeout'];

export const newscenterComponent = {
  bindings: { newscenter: '<' },
  controller: NewscenterController,
  template: `
  <div class="sj_news-center">
    <div class="sj_second-title">
      <span> {{ $ctrl.newscenter.cn_name }} </span>
      <span> {{ $ctrl.newscenter.en_name }} </span>
    </div>

    <div class="sj_wrapper">
      <div class="sj_tab">
        <div
          class="sj_tab-item"
          ng-repeat="item in $ctrl.newscenter.types"
          ng-class="{ active: $ctrl.isActive(item.type) }"
          data-type="{{ item.type }}"
          ng-click="$ctrl.showItem($event.target, item.type)"> {{ item.name }} </div>
      </div>
      <div class="sj_tab-content">
        <div
          class="sj_new-item"
          ng-repeat="(index, item) in $ctrl.newscenter.list"
          ng-class="{ reverse: $ctrl.isReverse(index), hide: $ctrl.isHide(item.type)}"
          data-type="{{ item.type }}"
          style="{{ item.type !== '1' ? 'display: none' : '' }}">
          
          <a href="{{ item.href }}">
            <img ng-src="{{ item.img }}" alt="{{ item.alt }}">
          </a>
    
          <div class="sj_new-content">
            <div class="sj_new-title">
              <a href="{{ item.href }}"> {{ item.title }} </a>
            </div>
            <div class="sj_new-link">原文链接</div>
            <div class="sj_new-date"> {{ item.date }} </div>
            <div class="sj_new-desc multi-line"> {{ item.desc }} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
}