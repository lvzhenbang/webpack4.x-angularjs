class Recruitment {
  constructor(dataService) {
    let name = 'recruitment', name2 = null
    let iss = storageService

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
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