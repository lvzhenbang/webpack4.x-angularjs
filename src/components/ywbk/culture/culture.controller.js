class Culture {
  constructor() {
    this.data = ywbk.culture;
    this.class = "sj_ywbk sj_culture";
    dataService.getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/ywbk.json').then(data => this.data = data.culture)
  }
}

Culture.$inject = ['dataService']

export default Culture