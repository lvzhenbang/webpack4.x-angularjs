class Investment {
  constructor(dataService) {
    this.class = "sj_zjsj sj_investment";
    dataService.getData('/data/zjsj.json').then(data => this.data = data.investment)
  }
}

Investment.$inject = ['dataService']

export default Investment;