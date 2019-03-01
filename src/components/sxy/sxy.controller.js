import data from '@data/sidenav.js';

class Sxy {
  constructor() {
    this.cn_name = data.sxy.cn_name;
    this.en_name = data.sxy.en_name;
    this.tabs = data.sxy.tabs;
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

export default Sxy