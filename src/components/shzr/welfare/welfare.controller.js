class Welfare {
  constructor(dataService) {
    this.class = "sj_shzr sj_welfare";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/shzr.json')
      .then(data => this.data = data.welfare)
  }
}

Welfare.$inject = ['dataService']

export default Welfare