class Ywbk {
  constructor(dataService, storageService) {
    let iss = storageService
    iss.init('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/index.json', 'banner')
    this.banner = iss.toJson(iss.getValue('banner'))
    
    iss.init('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/sidenav.json', 'ywbk')
    let ywbk = iss.toJson(iss.getValue('ywbk'))
    this.cn_name = ywbk.cn_name
    this.en_name = ywbk.en_name
    this.tabs = ywbk.tabs
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

Ywbk.$inject = ['dataService', 'storageService']

export default Ywbk