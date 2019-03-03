class System {
  constructor(dataService, storageService) {
    let name = 'shzr', name2 = 'system'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

System.$inject = ['dataService', 'storageService']

export default System