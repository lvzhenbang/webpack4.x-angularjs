class Allfinance {
  constructor(dataService) {
    this.class = "sj_ywbk sj_allfinance";
    dataService.getData('/data/ywbk.json').then(data => this.data = data.allfinance)
  }
}

Allfinance.$inject = ['dataService']

export default Allfinance