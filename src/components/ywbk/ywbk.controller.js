import data from '@data/sidenav.js';

class Ywbk {
  constructor() {
    this.cn_name = data.ywbk.cn_name;
    this.en_name = data.ywbk.en_name;
    this.tabs = data.ywbk.tabs;
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

export default Ywbk