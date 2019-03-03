class Zjsj {
  constructor(dataService, storageService) {
    let name = 'index', name2 = 'sidenav', name3 = 'zjsj'
    let iss = storageService

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.banner = data.banner
      }).then(() => {
        iss
          .init(`data/${name2}.json`, name2)
          .then((data) => {
            this.cn_name = data[name3].cn_name
            this.en_name = data[name3].en_name
            this.tabs = data[name3].tabs
          })
      })
  }

  isActive(index) {
    return index === 0 ? true : false
  }
}

Zjsj.$inject = ['dataService', 'storageService']

export default Zjsj