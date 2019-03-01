import newscenter from '@data/newscenter.js';

class Newscenter {
  constructor($timeout) {
    this.cn_name = newscenter.cn_name;
    this.en_name = newscenter.en_name;
    this.types = newscenter.types;
    this.list = newscenter.list;
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

Newscenter.$inject = ['$timeout'];

export default Newscenter;