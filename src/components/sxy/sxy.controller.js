class Sxy {
  constructor(dataService, storageService) {
    let iss = storageService
    iss.init('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/index.json', 'banner')
    this.banner = iss.toJson(iss.getValue('banner'))

    iss.init('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/sidenav.json', 'sxy')
    let sxy = iss.toJson(iss.getValue('sxy'))
    this.cn_name = sxy.cn_name
    this.en_name = sxy.en_name
    this.tabs = sxy.tabs
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

Sxy.$inject = ['dataService', 'storageService']

export default Sxy