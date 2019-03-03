class Career {
  constructor(dataService, storageService) {
    let name = 'shzr', name2 = 'career'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

Career.$inject = ['dataService', 'storageService']

export default Career