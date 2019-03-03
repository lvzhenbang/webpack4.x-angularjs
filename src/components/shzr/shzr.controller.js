class Shzr {
  constructor(dataService, storageService) {
    let iss = storageService
    iss.init('/data/index.json', 'banner')
    this.banner = iss.toJson(iss.getValue('banner'))

    iss.init('/data/sidenav.json', 'shzr')
    let shzr = iss.toJson(iss.getValue('shzr'))
    this.cn_name = shzr.cn_name
    this.en_name = shzr.en_name
    this.tabs = shzr.tabs
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

Shzr.$inject = ['dataService', 'storageService']

export default Shzr