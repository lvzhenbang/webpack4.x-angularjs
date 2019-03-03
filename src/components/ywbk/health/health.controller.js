class Health {
  constructor(dataService, storageService) {
    let name = 'ywbk', name2 = 'health'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

Health.$inject = ['dataService', 'storageService']

export default Health