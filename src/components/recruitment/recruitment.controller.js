import recruitment from '@data/recruitment.js'

class Recruitment {
  constructor() {
    this.cn_name = recruitment.cn_name;
    this.en_name = recruitment.en_name;
    this.img = recruitment.img;
    this.thead = recruitment.thead;
    this.data = recruitment.data;
  }

  isActive(index) {
    return index===0 ? true : false
  }

  detailStyle(index) {
    return index===0 ? { 'display': 'block' } : {}
  }
}

export default Recruitment