class Culture {
  constructor(dataService) {
    this.class = "sj_zjsj sj_culture";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/zjsj.json')
      .then(data => this.data = data.culture)
  }
}

Culture.$inject = ['dataService']

export default Culture