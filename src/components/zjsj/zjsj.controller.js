import data from '@data/sidenav.js';

class Zjsj {
  constructor() {
    this.cn_name = data.zjsj.cn_name;
    this.en_name = data.zjsj.en_name;
    this.tabs = data.zjsj.tabs;
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

export default Zjsj