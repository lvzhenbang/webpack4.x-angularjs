import banner from '@data/banner.js';

class Banner {
  constructor() {
    this.banner = banner
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

export default Banner;