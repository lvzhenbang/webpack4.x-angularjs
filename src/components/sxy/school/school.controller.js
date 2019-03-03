class School {
  constructor(dataService, storageService) {
    let name = 'sxy', name2 = 'school'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

School.$inject = ['dataService', 'storageService']

export default School