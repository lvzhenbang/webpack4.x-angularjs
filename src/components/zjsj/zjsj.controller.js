class Zjsj {
  constructor(dataService, storageService) {
    let iss = storageService
    iss.init('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/index.json', 'banner')
    this.banner = iss.toJson(iss.getValue('banner'))

    iss.init('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/sidenav.json', 'zjsj')
    let zjsj = iss.toJson(iss.getValue('zjsj'))
    this.cn_name = zjsj.cn_name
    this.en_name = zjsj.en_name
    this.tabs = zjsj.tabs
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

Zjsj.$inject = ['dataService', 'storageService']

export default Zjsj