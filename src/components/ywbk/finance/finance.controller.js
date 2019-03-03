class Finance {
  constructor(dataService) {
    this.data = ywbk.finance;
    this.class = "sj_ywbk sj_finance";
    dataService.getData('/data/ywbk.json').then(data => this.data = data.finance)
  }
}

Finance.$inject = ['dataService']

export default Finance