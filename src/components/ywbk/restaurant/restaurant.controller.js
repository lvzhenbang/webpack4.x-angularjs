class Restaurant {
  constructor(dataService) {
    this.class = "sj_ywbk sj_restaurant";
    dataService.getData('https://lvzhenbang.github.io/webpack4.x-angularjs/dist/data/ywbk.json').then(data => this.data = data.Restaurant)
  }
}

Restaurant.$inject = ['dataService']

export default Restaurant