class Contactus {
  constructor(dataService, storageService) {
    let name = 'index', name2 = 'contactus'
    let iss = storageService

    iss
      .init(`data/${name}.json`, name)
      .then((data) => {
        this.aboutus = data.aboutus
      }).then(() => {
        iss
          .init(`data/${name2}.json`, name2)
          .then((data) => {
            this.cn_name = data.cn_name
            this.en_name = data.en_name
            this.img = data.img
            this.company = data.company
            this.list = data.list
            this.qr_list = data.qr_list
          })
      })
  }
}

Contactus.$inject = ['dataService', 'storageService']

export default Contactus