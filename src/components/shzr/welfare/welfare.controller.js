class Welfare {
  constructor(dataService, storageService) {
    let name = 'shzr', name2 = 'welfare'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

Welfare.$inject = ['dataService', 'storageService']

export default Welfare