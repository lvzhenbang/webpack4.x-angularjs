class Event {
  constructor(dataService, storageService) {
    let name = 'zjsj', name2 = 'event'
    let iss = storageService

    this.class = `sj_${name} sj_${name2}`

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.data = data[name2]
      })
  }
}

Event.$inject = ['dataService', 'storageService']

export default Event