import styleus from '@data/styleus.js'

class Styleus {
  constructor() {
    this.cn_name = styleus.cn_name;
    this.en_name = styleus.en_name;
    this.list = styleus.list;
  }

  itemStyle(width, height) {
    return {
      "width": width + 'px',
      "height": height + 'px'
    }
  }
}

export default Styleus