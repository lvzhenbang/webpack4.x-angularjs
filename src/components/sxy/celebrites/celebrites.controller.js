class Celebrites {
  constructor(dataService) {
    this.class = "sj_sxy sj_celebrites";
    dataService
      .getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/sxy.json')
      .then(data => this.data = data.celebrites)
  }
}

Celebrites.$inject = ['dataService']

export default Celebrites