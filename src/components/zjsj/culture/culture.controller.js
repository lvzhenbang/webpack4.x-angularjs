class Culture {
  constructor(dataService, storageService) {
    this.class = "sj_zjsj sj_culture";
    let iss = storageService
    iss
      .init('data/zjsj.json', 'zjsj')
      .then((data) => {
        this.data = data.culture
      })
  }
}

Culture.$inject = ['dataService', 'storageService']

export default Culture