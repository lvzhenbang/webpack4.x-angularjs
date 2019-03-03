class Strategy {
  constructor(dataService) {
    this.class = "sj_zjsj sj_strategy";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/zjsj.json')
      .then(data => this.data = data.strategy)
  }
}

Strategy.$inject = ['dataService']

export default Strategy