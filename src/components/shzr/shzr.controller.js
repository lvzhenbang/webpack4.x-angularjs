import data from '@data/sidenav.js';

class Shzr {
  constructor() {
    this.cn_name = data.shzr.cn_name;
    this.en_name = data.shzr.en_name;
    this.tabs = data.shzr.tabs;
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

export default Shzr