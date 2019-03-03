class Index {
  constructor(dataService, storageService) {
    let iss = storageService
    iss.init('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/index.json', 'banner')
    this.banner = iss.toJson(iss.getValue('banner'))
    this.products = iss.toJson(iss.getValue('products'))
    this.partners = iss.toJson(iss.getValue('partners'))
    this.aboutus = iss.toJson(iss.getValue('aboutus'))
  }
}

Index.$inject = ['dataService', 'storageService']

export default Index