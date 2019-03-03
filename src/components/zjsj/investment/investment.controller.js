class Investment {
  constructor(dataService) {
    this.class = "sj_zjsj sj_investment";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/zjsj.json')
      .then(data => this.data = data.investment)
  }
}

Investment.$inject = ['dataService']

export default Investment;