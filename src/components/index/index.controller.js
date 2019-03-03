class Index {
  constructor(dataService, storageService) {
    let iss = storageService
    iss
      .init('data/index.json', 'index')
      .then((data) => {
        this.banner = data.banner
        this.products = data.products
        this.partners = data.partners
        this.aboutus = data.aboutus
      })
  }
}

Index.$inject = ['dataService', 'storageService']

export default Index