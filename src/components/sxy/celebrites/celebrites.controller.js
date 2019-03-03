class Celebrites {
  constructor(dataService, storageService) {
    let name = 'sxy', name2 = 'celebrites'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

Celebrites.$inject = ['dataService', 'storageService']

export default Celebrites