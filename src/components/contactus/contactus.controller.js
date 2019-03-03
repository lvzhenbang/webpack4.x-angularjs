class Contactus {
  constructor(dataService) {
    dataService
      .getData('/data/contactus.json')
      .then(data => {
        this.cn_name = data.cn_name
        this.en_name = data.en_name
        this.img = data.img
        this.company = data.company
        this.list = data.list
        this.qr_list = data.qr_list
      })
  }
}

Contactus.$inject = ['dataService']

export default Contactus