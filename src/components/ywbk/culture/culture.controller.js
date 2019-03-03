class Culture {
  constructor() {
    this.data = ywbk.culture;
    this.class = "sj_ywbk sj_culture";
    dataService.getData('/data/ywbk.json').then(data => this.data = data.culture)
  }
}

Culture.$inject = ['dataService']

export default Culture