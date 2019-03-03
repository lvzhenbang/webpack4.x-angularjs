class Culture {
  constructor(dataService, storageService) {
    let name = 'ywbk', name2 = 'culture'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

Culture.$inject = ['dataService', 'storageService']

export default Culture