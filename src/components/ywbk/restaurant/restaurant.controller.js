class Restaurant {
  constructor(dataService, storageService) {
    let name = 'ywbk', name2 = 'restaurant'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

Restaurant.$inject = ['dataService', 'storageService']

export default Restaurant