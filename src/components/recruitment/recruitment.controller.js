class Recruitment {
  constructor(dataService) {
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/recruitment.json')
      .then(data => {
        this.cn_name = data.cn_name
        this.en_name = data.en_name
        this.img = data.img
        this.thead = data.thead
        this.list = data.list
      })
  }

  isActive(index) {
    return index===0 ? true : false
  }

  detailStyle(index) {
    return index===0 ? { 'display': 'block' } : {}
  }
}

Recruitment.$inject = ['dataService']

export default Recruitment